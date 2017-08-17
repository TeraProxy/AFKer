# AFKer
A tera-proxy module that prevents you from getting back to the character select screen. 
This has the side effect that the server's AFK check will not kick you out of the game.  
  
## Usage  
The script is enabled by default and will prevent you from getting logged out when you are standing still for an hour.  
Simply moving your character will make you able to go back to character selection and reset the 1 hour timer.  
  
While in game, open a proxy chat session by typing "/proxy" or "/8" in chat and hitting the space bar.  
This serves as the script's command interface.  
The following commands are supported:  
  
* afk - enable/disable AFKer  
  
## Safety
Whatever you send to the proxy chat in game is intercepted client-side. The chat is NOT sent to the server.  
  
## Changelog
### 1.2.1
* [*] Some code cleanup
* [*] Full conversion to Pinkie Pie's command module
### 1.2.0
* [+] AFKer will now activate itself after standing still for an hour
* [*] AFKer is now enabled by default
* [+] Added support for Pinkie Pie's command module which is now a requirement
### 1.1.0
* [+] Added !afk command to toggle between "on" and "off" in non-whisper chats
### 1.0.0
* [*] Initial Release