
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(
      reg => console.log('SW registered!', reg),
      err => console.error('SW registration failed!', err)
    );
  });
}
