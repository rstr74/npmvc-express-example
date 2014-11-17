module.exports = function(include, puremvc) {
	
	/**
	 * @class npmvc.controller.StartExpressCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'npmvc.controller.StartExpressCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				// Setup Express
				var expressMediator = new npmvc.view.mediator.ExpressMediator();
				this.facade.registerMediator(expressMediator);

				var config = new npmvc.model.vo.ExpressConfigVo();
				config.setDomain('localhost');
				config.setPort(8080);
				config.setViewCache(false);
				
				expressMediator.addComponent("npmvc-express-example-route");
				
				this.facade.sendNotification("START_EXPRESS_SERVER",config);
			}
		});
}