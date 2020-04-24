# MessengerTT
MessengerTT (Work In Progress) is a dumb add-on which essentially is Twitch chat right into your Messenger chat. 

It's not stable and it can bug out when you change chats.

Also: it only recognizes emotes when they are sent alone; e.g. "KEKW" will work, but "KEKW moment" will not.

Only three emotes added at the moment, these are KEKW; OMEGALUL and POGGERS. These aren't saved locally on your computer but are rendered through a link from [frankerfacez](https://cdn.frankerfacez.com).

## How to install on Chrome
Since I'm not a certified Google developer, we have to do this the scuffed way.
1. Download the repo as a ZIP and unzip it somewhere you like
2. Go to [chrome://extensions](chrome://extensions)
3. Enable 'Developer mode' on the right upper corner
4. 'Load Unpacked' and select the whole folder you just downloaded.
5. Open and reload your Messenger window
6. Voila, it should be working!

Keep in mind bugs are still possible and that this is only for standalone Messenger, not the Messenger boxes on the Facebook site!

## How to Install on Firefox
Not yet released. 


TODO: 
1. Adding emotes through another site and only allow links from Frankerfacez
3. Being able to change emotes in messages ("hey KEKW"), this is done with "html.replace(/usedEmote/g)" but can't use variables at the moment
2. Firefox implementation



All emotes go to their respective creators and owners. 
