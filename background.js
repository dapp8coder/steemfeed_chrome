var patt = /https:\/\/steemit.com\/\@[^\/]+/i;

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { originAndPathMatches: "^https:\/\/steemit\.com\/\@[^\/]+$" },
            })
          ],
          actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }
      ]);
    });
  });

  chrome.runtime.onMessage.addListener(hideResteems);
  
  function hideResteems() {
      chrome.tabs.executeScript( {
          file: "/content_script/content.js"
      })
  }