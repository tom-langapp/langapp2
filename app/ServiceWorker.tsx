"use client"; // Ensures this runs only on the client side

export default function ServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("✅ Service Worker Registered", reg))
      .catch((err) =>
        console.error("❌ Service Worker Registration Failed", err)
      );
  }

  return null; // This component does not render anything
}
