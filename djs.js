/*
    D-JS Version 1.0.1
*/
function Debug(codelines,callbacks,name){
    if(this==window)
        return new Debug(codelines,callbacks,name);
    else
		this.codelines=typeof(codelines)=="function"?codelines:false;
		this.callbacks=typeof(callbacks)=="function"?callbacks:false;
		this.name=name;
        this.sandbox();
		return this;
}
Debug.prototype.sandbox=function(){try{this.codelines();}catch(e){this.log(e);}};
Debug.prototype.log=function(textToLog){if(window.console)window.console.log(textToLog);}
