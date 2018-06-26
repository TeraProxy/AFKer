// Version 1.2.3

const Command = require('command')

module.exports = function afker(dispatch) {
	let enabled = true,
		lasttimemoved = Date.now()

	dispatch.hook('C_PLAYER_LOCATION', 5, event => {
		if([0,1,5,6].indexOf(event.type) > -1) // running / walking / jumping / jumping (steep terrain)
			lasttimemoved = Date.now()
	})

	dispatch.hook('C_RETURN_TO_LOBBY', 'raw', () => {
		if (enabled && Date.now() - lasttimemoved >= 3600000) return false // Prevents you from being logged out after not moving for 1 hour
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