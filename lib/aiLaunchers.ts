import { getDeviceInfo } from "./deviceDetection";

export interface LaunchResult {
  openedApp: boolean;
  message: string;
}

export interface AIProviderConfig {
  id: string;
  name: string;
  badge: string;
  bg: string;
  androidPackage?: string;
  webUrl: (prompt: string) => string;
  iosUniversalUrl?: (prompt: string) => string;
}

export const AI_PROVIDERS_CONFIG: Record<string, AIProviderConfig> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    badge: "OpenAI",
    bg: "#1a1a1a",
    androidPackage: "com.openai.chatgpt",
    webUrl: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}`,
    iosUniversalUrl: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}`,
  },
  claude: {
    id: "claude",
    name: "Claude",
    badge: "Anthropic",
    bg: "#D97706",
    androidPackage: "com.anthropic.claude",
    webUrl: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}`,
    iosUniversalUrl: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}`,
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    badge: "Google",
    bg: "#4285F4",
    androidPackage: "com.google.android.apps.bard",
    webUrl: () => `https://gemini.google.com/app`,
    iosUniversalUrl: () => `https://gemini.google.com/app`,
  },
  perplexity: {
    id: "perplexity",
    name: "Perplexity",
    badge: "Perplexity AI",
    bg: "#20808D",
    androidPackage: "ai.perplexity.app.android",
    webUrl: (p) => `https://www.perplexity.ai/search?q=${encodeURIComponent(p)}`,
    iosUniversalUrl: (p) => `https://www.perplexity.ai/search?q=${encodeURIComponent(p)}`,
  },
};

/**
 * Copies the prompt to clipboard safely without throwing unhandled exceptions.
 */
export async function copyPromptToClipboard(prompt: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return false;
  }
  try {
    await navigator.clipboard.writeText(prompt);
    return true;
  } catch {
    return false;
  }
}

/**
 * Intelligent AI Assistant Launcher.
 * Selects Android Intent, iOS Universal Link, or Desktop Web Window based on client device.
 */
export async function launchAIAssistant(
  providerId: string,
  prompt: string
): Promise<LaunchResult> {
  const config = AI_PROVIDERS_CONFIG[providerId];
  if (!config) {
    return { openedApp: false, message: "Unknown AI provider" };
  }

  const device = getDeviceInfo();
  const webTargetUrl = config.webUrl(prompt);

  // Always copy to clipboard as a reliable safety net
  await copyPromptToClipboard(prompt);

  // 1. Android Phone or Tablet
  if (device.isAndroid && config.androidPackage) {
    // Strip protocol for Android Intent syntax: intent://host/path?query#Intent;...
    const urlObj = new URL(webTargetUrl);
    const intentPath = `${urlObj.host}${urlObj.pathname}${urlObj.search}`;
    const androidIntentUrl = `intent://${intentPath}#Intent;scheme=https;package=${config.androidPackage};S.browser_fallback_url=${encodeURIComponent(webTargetUrl)};end`;

    // Navigate in same frame so Android Package Manager resolves the intent directly
    window.location.href = androidIntentUrl;

    return {
      openedApp: true,
      message: `Opening ${config.name}...`,
    };
  }

  // 2. iOS iPhone or iPad
  if (device.isIOS) {
    const universalUrl = config.iosUniversalUrl ? config.iosUniversalUrl(prompt) : webTargetUrl;
    
    // Direct navigation allows iOS Universal Links to intercept and launch installed app
    window.location.href = universalUrl;

    return {
      openedApp: true,
      message: `Opening ${config.name}...`,
    };
  }

  // 3. Desktop (Windows, macOS, Linux)
  window.open(webTargetUrl, "_blank", "noopener,noreferrer");

  return {
    openedApp: false,
    message: `${config.name} opened. Prompt prefilled or ready in clipboard!`,
  };
}
