chrome.system.memory.getInfo(function(info) {
    const capacity = info.capacity;
    const availableCapacity = info.availableCapacity;
  });
  
  chrome.browserAction.setBadgeText(
      {text: availableCapacity.toString()}
  )
