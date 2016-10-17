
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $(".player-button--volume").click();
  });