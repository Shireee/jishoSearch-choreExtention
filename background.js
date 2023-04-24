chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "1",
        title: "Find \『%s\』 in Jisho",
        contexts: ["selection"],

    });

});

chrome.contextMenus.onClicked.addListener(function(info) {
    var URL = "https://jisho.org/search/" + info.selectionText;
    chrome.tabs.create({url: URL});
})