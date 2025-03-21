interface WindowWithMSStream extends Window {
    MSStream?: any;
}

export function handleStoreRedirect(appStoreUrl: string, playStoreUrl: string): void {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Check if the device is running iOS
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !((window as WindowWithMSStream).MSStream);

    // Check if the device is running Android
    const isAndroid = /android/i.test(userAgent);

    // Get the query string parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const redirectToAppStore = params.has("openstore");

    if(redirectToAppStore) {
        if (isIOS) {
            // Redirect to your App Store link
            window.location.href = appStoreUrl;
        } else if (isAndroid) {
            // Redirect to your Google Play Store link
            window.location.href = playStoreUrl;
        }
    }
}