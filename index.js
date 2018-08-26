// Version 1.2.5

module.exports = function afker(mod) {

	let enabled = true,
		lasttimemoved = Date.now()

	mod.hook('C_PLAYER_LOCATION', 5, event => {
		if([0,1,5,6].indexOf(event.type) > -1) // running / walking / jumping / jumping (steep terrain)
			lasttimemoved = Date.now()
	})

	mod.hook('C_RETURN_TO_LOBBY', 'raw', () => {
		if (enabled && Date.now() - lasttimemoved >= 3600000) return false // Prevents you from being logged out after not moving for 1 hour
	})

	// ################# //
	// ### Chat Hook ### //
	// ################# //

	mod.command.add('afk', () => {
		enabled = !enabled
		mod.command.message((enabled ? '<font color="#56B4E9">enabled</font>' : '<font color="#E69F00">disabled</font>'))
		console.log('[AFKer] ' + (enabled ? 'enabled' : 'disabled'))
	})
}