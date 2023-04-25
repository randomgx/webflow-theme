// Inject the custom styles
const head = document.head;
const link = document.createElement('link');

link.rel = 'stylesheet';
link.href = chrome.runtime.getURL('styles/themes.css');

head.appendChild(link);

// Function to add custom UI elements to the left sidebar
function addThemesButton() {
  const leftSidebarLinks = document.querySelector('.left-sidebar-links');
  const themesButton = document.createElement('div');
  if (leftSidebarLinks) {
    themesButton.className = 'button top themes';
    themesButton.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" class="bem-Svg" style="display: block;">
        <circle cx="10" cy="10" r="8" fill="currentColor"></circle>
      </svg>
    `;
    leftSidebarLinks.appendChild(themesButton);
  }

    // Append themesButton and sidePanel to the DOM
    leftSidebarLinks.appendChild(themesButton);

}

// Wait for the left sidebar to appear and then execute addThemesButton
const observer = new MutationObserver((mutations, observer) => {
  if (document.querySelector('.left-sidebar-links')) {
    addThemesButton();
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });