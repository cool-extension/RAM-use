
chrome.system.memory.getInfo(function(info) {
  const capacity = info.capacity;
  const availableCapacity = info.availableCapacity;

  document.getElementbyId('getRAM').textContent = capacity;
  document.getElementbyId('GaRAM').textContent = availableCapacity;
});
