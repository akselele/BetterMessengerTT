var button = document.getElementById("currentEmotes");
button.addEventListener("click", function(){
    chrome.tabs.create({url:"https://betterttv.com/emotes/top"});
});