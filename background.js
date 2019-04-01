chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ram: Null}, function() {
    
  });
});