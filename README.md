# AFKer
A tera-proxy module that prevents you from getting back to the character select screen. 
This has the side effect that the server's AFK check will not kick you out of the game.  
  
## Usage  
The script is enabled by default and will prevent you from getting logged out when you are standing still for an hour.  
Simply moving your character will make you able to go back to character selection and reset the 1 hour timer.  
While ingame, open a whisper chat session with "!AFKer" by typing "/w !afker" in chat and hitting the space bar.
This serves as the script's command interface. 
The following commands are supported:  
  
* on - Enables the script (default)  
* off - Disables the script  
  
Any other input returns a summary of above commands in the game.  
  
Alternative commands in all other chats:  
* !afk - Toggles between "on" and "off" state  
  
Support for Pinkie Pie's command module:  
* /proxy afk - Toggles between "on" and "off" state  
  
## Safety
Whatever you send to "!AFKer" ingame is intercepted client-side. The chat is NOT sent to the server.
  
## Changelog
### 1.2.0
* [+] AFKer will now activate itself after standing still for an hour
* [*] AFKer is now enabled by default
* [+] Added support for Pinkie Pie's command module which is now a requirement
### 1.1.0
* [+] Added !afk command to toggle between "on" and "off" in non-whisper chats
### 1.0.0
* [*] Initial Release