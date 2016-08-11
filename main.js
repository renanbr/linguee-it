
function lingueeIt () {
    chrome.tabs.executeScript(
        null, // runs under active tab
        { code : "window.getSelection().toString()" },
        function (text) {
            chrome.tabs.create({
                url : "http://www.linguee.com/search?source=auto&query=" + text
            });
        }
    );
}

chrome.browserAction.onClicked.addListener(lingueeIt);
