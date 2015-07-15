chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  console.log('onBeforeNavigate ', details.url);
  if (details && details.url && details.url.match('(https?:\/\/)[a-z]+[\.]+(gfycat.com)[/]')) {
  	var gfyPath = details.url.split('/').pop().split('.').shift();
    chrome.tabs.update(details.tabId, {url: 'https://gfycat.com/' + gfyPath});
  }
})
