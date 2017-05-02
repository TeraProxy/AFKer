module.exports = function AFKer(dispatch) {
	let enabled = false,
		cid = null,
		player = ''
		
	dispatch.hook('S_LOGIN', 1, event => {
		({cid} = event)
		player = event.name
	})

	dispatch.hook('C_RETURN_TO_LOBBY', 1, () => {
		if (enabled) return false // Prevents you from being automatically logged out while AFK
	})
  
	// ################# //
	// ### Chat Hook ### //
	// ################# //
	
	dispatch.hook('C_WHISPER', 1, (event) => {
		if(event.target.toUpperCase() === "!afker".toUpperCase()) {
			if (/^<FONT>on?<\/FONT>$/i.test(event.message)) {
				enabled = true
				message('AFKer <font color="#00EE00">enabled</font>.')
			}
			else if (/^<FONT>off?<\/FONT>$/i.test(event.message)) {
				enabled = false
				message('AFKer <font color="#DC143C">disabled</font>.')
			}
			else message('Commands: "on" (enable AFKer),'
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
}