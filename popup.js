


  //   chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  //  function(tabs){
  //   var url;
  //     url =tabs[0].url;
      
      
  //       chrome.tabs.executeScript(tabs.id, {code: "$(\"._3oh-._58nk:contains(\'KEKW\')\").html(function (_, html) {\r\n          return html.replace(\/KEKW\/g,\"<img src=\\\"https:\\\/\\\/cdn.frankerfacez.com\\\/emoticon\\\/381875\\\/4\\\" width=\\\"32\\\" height=\\\"32\\\">\")\r\n     });"});        
    
    
  //  });

  
  $('._2sdm').on('DOMSubtreeModified', function(){
    console.log('changed');
    $("._3oh-._58nk:contains('KEKW')").html(function (_, html) {
      return html.replace(/KEKW/g,"<img src=\"https:\/\/cdn.frankerfacez.com\/emoticon\/381875\/4\" width=\"32\" height=\"32\">")
  });
  });