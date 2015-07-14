chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'loading') {
    redirectGfyCat(tab, tabId);
  }
})

function redirectGfyCat(tab, tabId) {
	var url = tab.url;
    if(url.includes('.gfycat.com/')) {
	    var gfyPath = url.split('/').pop().split('.').shift();
		chrome.tabs.update(tabId, {url: 'https://gfycat.com/' + gfyPath});
	}
}
