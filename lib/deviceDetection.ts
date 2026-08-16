/**
 * Lightweight, robust client-side platform and device detection utility.
 */

export interface DeviceInfo {
  isAndroid: boolean;
  isIOS: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
}

export function getDeviceInfo(): DeviceInfo {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      isAndroid: false,
      isIOS: false,
      isTablet: false,
      isMobile: false,
      isDesktop: true,
    };
  }

  const ua = navigator.userAgent || "";
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform || navigator.platform || "";
  const maxTouchPoints = navigator.maxTouchPoints || 0;

  // iOS detection (including iPadOS where userAgent says MacIntel)
  const isIPad =
    /iPad/i.test(ua) ||
    (/Macintosh|MacIntel/i.test(platform) && maxTouchPoints > 1 && !/iPhone|iPod/i.test(ua));
  const isIPhone = /iPhone|iPod/i.test(ua);
  const isIOS = isIPad || isIPhone;

  // Android detection
  const isAndroid = /Android/i.test(ua);
  const isAndroidTablet = isAndroid && !/Mobile/i.test(ua);

  // Consolidated tablet & mobile
  const isTablet = isIPad || isAndroidTablet;
  const isMobile = (isIPhone || (isAndroid && /Mobile/i.test(ua))) && !isTablet;
  const isDesktop = !isIOS && !isAndroid && maxTouchPoints === 0;

  return {
    isAndroid,
    isIOS,
    isTablet,
    isMobile,
    isDesktop,
  };
}
