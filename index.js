const Command = require('command')

module.exports = function AFKer(dispatch) {
	let enabled = true,
		afk = false,
		afkCheck = null
	
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
	
	const command = Command(dispatch)
	command.add('afk', () => {
		enabled = !enabled
		command.message('[AFKer] ' + (enabled ? '<font color="#56B4E9">enabled</font>' : '<font color="#E69F00">disabled</font>'))
		console.log('[AFKer] ' + (enabled ? 'enabled' : 'disabled'))
	})
}