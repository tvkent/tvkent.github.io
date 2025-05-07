// Setup darkreader for CORS
DarkReader.setFetchMethod(url => {
  let headers = new Headers()
  headers.append('Access-Control-Allow-Origin', '*')

  return window.fetch(url, {
    headers,
    mode: 'no-cors',
  })
})

// set color mode on page load
function checkDarkMode() {
  if (darkModeEnabled()) {
    DarkReader.enable();
  } else {
    DarkReader.disable();
  }

  }


function toggleDarkMode() {
  if (darkModeEnabled()) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  DarkReader.enable();
}

function disableDarkMode() {
  DarkReader.disable();
}
