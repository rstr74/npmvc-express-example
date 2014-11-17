module.exports = function(include, puremvc) {

	include("controller/StartExpressCommand");
	/**
	 * @class npmvc.controller.StartCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'npmvc.controller.StartCommand',
			parent: puremvc.MacroCommand
		},
		// INSTANCE MEMBERS
		{
			initializeMacroCommand: function() {
				this.addSubCommand(npmvc.controller.StartExpressCommand);
			}
		});

}