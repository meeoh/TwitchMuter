
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("client");
    $(".player-button--volume").click();
  });