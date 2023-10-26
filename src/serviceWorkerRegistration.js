// src/serviceWorkerRegistration.js
export function register() {
  if ('serviceWorkerRegistration' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorkerRegistration
        .register('/service-worker.js')
        .then((registration) => {
          console.log('serviceWorkerRegistration registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('serviceWorkerRegistration registration failed:', error);
        });
    });
  }
}
