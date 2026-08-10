DarkReader.setFetchMethod(url => {
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', '*');
  return window.fetch(url, { headers, mode: 'no-cors' });
});

function darkModeEnabled() {
  // Use localStorage if user has manually toggled, otherwise follow OS setting
  const stored = localStorage.getItem('darkMode');
  if (stored !== null) return stored === 'true';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function checkDarkMode() {
  if (darkModeEnabled()) {
    DarkReader.enable({ brightness: 100, contrast: 90 });
  } else {
    DarkReader.disable();
  }
}

function toggleDarkMode() {
  if (darkModeEnabled()) {
    localStorage.setItem('darkMode', 'false');
    DarkReader.disable();
  } else {
    localStorage.setItem('darkMode', 'true');
    DarkReader.enable({ brightness: 100, contrast: 90 });
  }
}
