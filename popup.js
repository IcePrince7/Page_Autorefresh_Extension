document.addEventListener('DOMContentLoaded', function() {
    var startRefreshButton = document.getElementById('startRefresh');
    var stopRefreshButton = document.getElementById('stopRefresh');
  
    startRefreshButton.addEventListener('click', function() {
      var interval = 15; // This is a hardcoded value
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'startRefresh', interval: interval });
      });
    });
  
    stopRefreshButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'stopRefresh' });
      });
    });
  });
  