const lookHere = chrome.extension.getURL('cage.png');

[...document.getElementsByTagName('img')].forEach(element => {
  element.src = lookHere;
});