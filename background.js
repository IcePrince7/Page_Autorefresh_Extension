chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'startRefresh') {
      chrome.tabs.sendMessage(sender.tab.id, { action: 'startRefresh', interval: request.interval });
    }
  });
  