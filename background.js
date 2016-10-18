// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//for doing initial mute
// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.query({ currentWindow: true, url: "https://www.twitch.tv/*" }, function(tabs) {
//         for (var i = 0; i < tabs.length; i++) {
//             chrome.tabs.executeScript(tabs[i].id, { file: "intialMute.js" });
//         }
//     })
// });


var oldTabId = 0;

chrome.tabs.onActivated.addListener(function(obj) {
    // console.log(obj);
    // chrome.tabs.sendMessage(obj.tabId, {test:"TEST"},function(response){});
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    	if (oldTabId == 0){
    		oldTabId = tabs[0].id;
    		return;
    	}    	

        chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function(response) {
        });

        // chrome.tabs.sendMessage(oldTabId, { greeting: "hello" }, function(response) {
        // });
  
        oldTabId = tabs[0].id;

    });
});
