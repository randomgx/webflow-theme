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

    // Add event listener to the button to toggle the side panel
    let sidePanelVisible = false;
    themesButton.addEventListener('click', () => {
    if (sidePanelVisible) {
        sidePanel.style.display = 'none';
        sidePanelVisible = false;
    } else {
        sidePanel.style.display = 'block';
        sidePanelVisible = true;
    }
    });

    // Append themesButton and sidePanel to the DOM
    leftSidebarLinks.appendChild(themesButton);
    document.body.appendChild(sidePanel);

}

// Wait for the left sidebar to appear and then execute addThemesButton
const observer = new MutationObserver((mutations, observer) => {
  if (document.querySelector('.left-sidebar-links')) {
    addThemesButton();
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });