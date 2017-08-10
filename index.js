const Command = require('command')

module.exports = function AFKer(dispatch) {
	let enabled = true,
		afk = false,
		cid = null,
		player = '',
		afkCheck = null
		
	dispatch.hook('S_LOGIN', 1, event => {
		({cid} = event)
		player = event.name
	})
	
	dispatch.hook('C_PLAYER_LOCATION', 1, () => {
		clearTimeout(afkCheck)
		afk = false
		afkCheck = setTimeout(() => {afk = true}, 3600000) // 1 hour
	})

	dispatch.hook('C_RETURN_TO_LOBBY', 1, () => {
		if (enabled && afk) return false // Prevents you from being automatically logged out while AFK
	})
  
	// ################# //
	// ### Chat Hook ### //
	// ################# //
	
	dispatch.hook('C_WHISPER', 1, (event) => {
		if(event.target.toUpperCase() === "!afker".toUpperCase()) {
			if (/^<FONT>on?<\/FONT>$/i.test(event.message)) {
				enabled = true
				message('AFKer <font color="#56B4E9">enabled</font>.')
			}
			else if (/^<FONT>off?<\/FONT>$/i.test(event.message)) {
				enabled = false
				message('AFKer <font color="#E69F00">disabled</font>.')
			}
			else message('Commands:<br>'
								+ ' "on" (enable AFKer),<br>'
								+ ' "off" (disable AFKer)'
						)
			return false
		}
	})
	
	function message(msg) {
		dispatch.toClient('S_WHISPER', 1, {
			player: cid,
			unk1: 0,
			gm: 0,
			unk2: 0,
			author: '!AFKer',
			recipient: player,
			message: msg
		})
	}
	
	dispatch.hook('C_CHAT', 1, event => {
		if(/^<FONT>!afk<\/FONT>$/i.test(event.message)) {
			if(!enabled) {
				enabled = true
				message('AFKer <font color="#56B4E9">enabled</font>.')
				console.log('AFKer enabled.')
			}
			else {
				enabled = false
				message('AFKer <font color="#E69F00">disabled</font>.')
				console.log('AFKer disabled.')
			}
			return false
		}
	})
	
	const command = Command(dispatch)
	command.add('afk', function() {
		if(!enabled) {
			enabled = true
			message('AFKer <font color="#56B4E9">enabled</font>.')
			console.log('AFKer enabled.')
		}
		else {
			enabled = false
			message('AFKer <font color="#E69F00">disabled</font>.')
			console.log('AFKer disabled.')
		}
	})
}