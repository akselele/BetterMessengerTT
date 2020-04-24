  var emoturl = chrome.runtime.getURL('emoteLib.json');
  var emotes = [];
  var emotesLinks= [];

  fetch(emoturl)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => setEmotes(json));


  
  $('.uiScrollableAreaWrap').on('DOMSubtreeModified', function(){
    

    var input = $.map($("._3oh-._58nk"), $.text)
    var b = input.slice(-1)[0];
    test(input);
    console.log('changed');
  });

  function setEmotes(json){
    for (var i = 0; i < json.length; i++){
      emotes.push(json[i]['emote']);
      emotesLinks.push(json[i]['link']);
    }
    console.log(emotes);
  }

  function replace(usedEmote){
    $("._3oh-._58nk:contains('" + usedEmote + "')").html(function (_, html) {
      // return html.replace(usedEmote,"<img src=\"https:\/\/cdn.frankerfacez.com\/emoticon\/381875\/4\" width=\"32\" height=\"32\">")
      return html.replace(usedEmote,"<img src=\"https:\/\/cdn.frankerfacez.com\/emoticon\/381875\/4\" width=\"32\" height=\"32\">")
  });
  }

  function test(b){
    for(a = 0; a < b.length; a++)
    if(emotes.includes(b[a])){
      replace(b[a]);
    }
  }