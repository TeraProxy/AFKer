##### :heavy_exclamation_mark: Status :heavy_exclamation_mark:
Working on NA Godsfall patch with the latest https://github.com/meishuu/tera-data.  
Please always keep your tera-data up-to-date.  
Other regions will work if the opcodes are mapped but I personally only test modules on NA.  
  
If you enjoy my work and wish to support future development, feel free to drop me a small donation: [![Donate](https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=A3KBZUCSEQ5RJ&lc=US&item_name=TeraProxy&curency_code=USD&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
  
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
### 1.2.2
* [*] Updated hook versions for compatibility with the latest Tera-Proxy programs
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