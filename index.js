module.exports = function AFKer(dispatch) {
	let enabled = false

	dispatch.hook('C_RETURN_TO_LOBBY', 1, () => {
		if (enabled) return false // Prevents you from being automatically logged out while AFK
	})
	
	dispatch.hook('C_WHISPER', 1, (event) => {
		if (/^<FONT>!afker?<\/FONT>$/i.test(event.message)) {
			if (!enabled) {
				enabled = true
				message('AFKer <font color="#00EE00">enabled</font>. Whisper "!afker" to disable.')
			}
			else {
				enabled = false
				message('AFKer <font color="#DC143C">disabled</font>. Whisper "!afker" to enable.')
			}
			return false
		}
	})
  
	function message(msg) {
		dispatch.toClient('S_CHAT', 1, {
			channel: 24,
			authorID: 0,
			unk1: 0,
			gm: 0,
			unk2: 0,
			authorName: '',
			message: msg
		})
	}
}