chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url &&
    tab.url.match(/https:\/\/[^/]+\.webflow\.com\//)
  ) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['scripts/content.js'],
    });

    chrome.scripting.insertCSS({
      target: { tabId },
      files: ['styles/themes.css'],
    });
  }
});