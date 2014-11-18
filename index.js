var puremvc =
    require("npmvc");
    require("npmvc-express")(puremvc);
    
    // set the base path for app classes
    var basePath = __dirname + "/src";
    puremvc.setSourceDir(basePath);
    puremvc.include('AppConstants');
    puremvc.include('ApplicationFacade');
    
    var facade = npmvc.ApplicationFacade.getInstance(npmvc.ApplicationFacade.NAME);
    facade.start();