import { getDeviceInfo } from "./deviceDetection";

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
 * Intelligent AI Assistant Launcher.
 * Directly launches Android Intent, iOS Universal Link, or Desktop Web Window with the prefilled prompt.
 * No clipboard operations are performed.
 */
export function launchAIAssistant(
  providerId: string,
  prompt: string
): void {
  const config = AI_PROVIDERS_CONFIG[providerId];
  if (!config) return;

  const device = getDeviceInfo();
  const webTargetUrl = config.webUrl(prompt);

  // 1. Android Phone or Tablet
  if (device.isAndroid && config.androidPackage) {
    try {
      const urlObj = new URL(webTargetUrl);
      const intentPath = `${urlObj.host}${urlObj.pathname}${urlObj.search}`;
      const androidIntentUrl = `intent://${intentPath}#Intent;scheme=https;package=${config.androidPackage};S.browser_fallback_url=${encodeURIComponent(webTargetUrl)};end`;
      window.location.href = androidIntentUrl;
      return;
    } catch {
      window.location.href = webTargetUrl;
      return;
    }
  }

  // 2. iOS iPhone or iPad
  if (device.isIOS) {
    const universalUrl = config.iosUniversalUrl ? config.iosUniversalUrl(prompt) : webTargetUrl;
    window.location.href = universalUrl;
    return;
  }

  // 3. Desktop (Windows, macOS, Linux)
  window.open(webTargetUrl, "_blank", "noopener,noreferrer");
}
