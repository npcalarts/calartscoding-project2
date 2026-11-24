// Light / dark mode: click NON to toggle. Choice is remembered.
(function () {
  var root = document.documentElement;
  var KEY = 'nonint-theme';

  // Apply immediately (script is in <head>) so there's no flash
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.setAttribute('aria-pressed', theme === 'dark');

    btn.addEventListener('click', function () {
      theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      btn.setAttribute('aria-pressed', theme === 'dark');
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    });
  });
})();