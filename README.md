# BetterMessengerTT (BMTT)
BMTT (Work In Progress) is a dumb add-on which essentially is Twitch chat right into your Messenger chat. 

Bugs can still happen and I'm not responsible for Chrome crashing (shouldn't be happening but haven't tested it yet).

Messenger version SHOULD work flawlessly and we're currently in a beta for the Facebook version.

As things stand it works like this:
Load your Facebook and open up a chat window.
After 7 seconds of opening your window, whenever something happens in the chat window (hover, new message, ...) it should convert any emotes to the images.
BUT when you close the window in order to make the images work again you have to reload your whole page. To prevent this, don't close your window but change
chat screens without closing them, then it keeps working.

I am currently looking for a fix. 

## How to install on Chrome
It got released on Chrome store! Only the Messenger version works there.
1. Install on [https://chrome.google.com/webstore/detail/bettermessengertt/gmllkmdhcbencpjnppfipjjajcbbbpgk](https://chrome.google.com/webstore/detail/bettermessengertt/gmllkmdhcbencpjnppfipjjajcbbbpgk)

To install the 'beta' Facebook version do this:
1. Download the repo as a ZIP and unzip it somewhere you like
2. Go to chrome://extensions
3. Enable 'Developer mode' on the right upper corner
4. 'Load Unpacked' and select the whole folder you just downloaded.
5. Open and reload your Messenger window
6. Voila, it should be working!



## How to Install on Firefox
Not yet released. 


## TODO: 
1. Being able to change emotes in messages ("hey KEKW"), this is done with "html.replace(/usedEmote/g)" but can't use variables at the moment
2. Firefox implementation



All emotes go to their respective creators and owners. 

## Currently supported emotes
The thousand first emotes of https://betterttv.com/emotes/top. 


####
All emotes go to their respective creators and owners. 
Credits for BMTT logo go to FatDonutCop (Ilias A.).
