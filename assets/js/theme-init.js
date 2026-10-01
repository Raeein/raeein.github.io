// Runs before first paint so a saved theme never flashes the wrong colors.
(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.dataset.theme = theme;
    }
  } catch (e) {
    // Storage blocked: fall back to the system preference via CSS.
  }
})();
