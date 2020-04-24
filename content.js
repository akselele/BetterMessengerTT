
$(document).ready(function() {
    // Select the target node (tweet modal)
    console.log($('._2sdm').get(0));
    var target = $('._2sdm').get(0);
  
    // Create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          
        test($.map($("._3oh-._58nk"), $.text));
  
      });
    });
  
    // Configuration of the observer
    var config = { attributes:true, subtree: true };
  
    // Pass in the target node, as well as the observer options
    observer.observe(target, config);
  
  });


  var emoturl = chrome.runtime.getURL('emoteLib.json');
  var emotesNames = [];
  var emotesLinks= [];
  var emotes = [];

  fetch(emoturl)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => setEmotes(json));

  function setEmotes(json){
    for (var i = 0; i < json.length; i++){
      emotesNames.push(json[i]['emote']);
      emotesLinks.push(json[i]['link']);
      emotes.push(json[i]);
    }
  }

  function replace(usedEmote){
    $("._3oh-._58nk:contains('" + usedEmote + "')").html(function (_, html) {
      // return html.replace(usedEmote,"<img src=\"https:\/\/cdn.frankerfacez.com\/emoticon\/381875\/4\" width=\"32\" height=\"32\">")
      return html.replace(usedEmote,"<img src=\""+getLinkFromName(usedEmote)+"\" width=\"32\" height=\"32\">")
  });
  }

  function getLinkFromName(name){
    for(i=0; i<emotes.length; i++){
      if(name===emotes[i]['emote']){
        return emotes[i]['link'];
      }
    }
  }

  function test(b){
    for(a = 0; a < b.length; a++){
    if(emotesNames.includes(b[a])){
      replace(b[a]);
    }
  }
  }