# AFKer
A tera-proxy module that prevents you from getting back to the character select screen. 
This has the side effect that the server's AFK check will not kick you out of the game.  
  
## Usage  
While ingame, open a whisper chat session with "!AFKer" by typing "/w !afker" in chat and hitting the space bar.
This serves as the script's command interface. 
The following commands are supported:  
  
* on - Enables the script  
* off - Disables the script (default)  
  
Any other input returns a summary of above commands in the game.  
  
Alternative commands in all other chats:  
* !afk - Toggles between "on" and "off" state  
  
## Safety
Whatever you send to "!AFKer" ingame is intercepted client-side. The chat is NOT sent to the server.