var intervalId;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startRefresh') {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(function() {
      location.reload();
    }, request.interval * 1000);
  } else if (request.action === 'stopRefresh') {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
});
