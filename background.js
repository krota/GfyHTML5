chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  if (details && details.url && details.url.match('(https?:\/\/)[a-z]+[\.]+(gfycat.com)[/]')) {
  	var gfyPath = details.url.split('/').pop().split('.').shift();
    chrome.tabs.update(details.tabId, {url: 'https://gfycat.com/' + gfyPath});
  }
})
