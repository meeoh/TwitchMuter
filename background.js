// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.tabs.onActivated.addListener(function(obj) {
    // console.log(obj);
    // chrome.tabs.sendMessage(obj.tabId, {test:"TEST"},function(response){});
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function(response) {
            console.log("test");
        });
    });
});
