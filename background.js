chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, { file: "testScript.js" });
});