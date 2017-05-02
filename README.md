# AFKer
A tera-proxy module that prevents you from getting back to the character select screen. 
This has the side effect that the server's AFK check will not kick you out of the game.  
  
## Usage  
While in game, open a whisper chat session with "!AFKer" by typing "/w !afker" in chat and hitting the space bar.
This serves as the script's command interface. 
The following commands are supported:  
  
* on - Enables the script  
* off - Disables the script  
  
Any other input returns a summary of above commands in the game.
  
## Safety
Whatever you send to "!AFKer" in game is intercepted client-side. The chat is NOT sent to the server.