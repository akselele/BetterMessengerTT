

$(window).on('load', function () {
  setTimeout(function(){
      console.log("facebook");
      var target = document.getElementsByClassName("pmk7jnqg lfi1tu6t esma6hys j83agx80")
      console.log(target)
      console.log(target.item(0))
      var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
              console.log("hey")
              test($.map($(".kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql"), $.text));
  
          });
      });
  
      var config = { attributes: true, subtree: true };
  
      observer.observe(target[0], config);
  }, 7000);
});


var emoturl = chrome.runtime.getURL('emoteLib.json');
var emotesNames = [];
var emotesLinks = [];
var emotes = [];

fetch(emoturl)
  .then((response) => response.json())
  .then((json) => setEmotes(json));

function setEmotes(json) {
  for (var i = 0; i < json.length; i++) {
      emotesNames.push(json[i]['emote']);
      emotesLinks.push(json[i]['link']);
      emotes.push(json[i]);
  }
}

function replace(usedEmote) {
  $(".kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql:contains('" + usedEmote + "')").html(function (_, html) {
      return html.replace(usedEmote, "<img src=\"" + getLinkFromName(usedEmote) + "\" width=\"32\" height=\"32\">")
  });
}

function getLinkFromName(name) {
  for (i = 0; i < emotes.length; i++) {
      if (name === emotes[i]['emote']) {
          return emotes[i]['link'];
      }
  }
}

function test(b) {
  for (a = 0; a < b.length; a++) {
      if (emotesNames.includes(b[a])) {
          replace(b[a]);
      }
  }
}