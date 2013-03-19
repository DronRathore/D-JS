/*
    D-JS Version 1.0.1
*/

function Debug(codelines,callbacks){
    if(this==window)
        return new Debug(codelines,callbacks);
    else
        this.codelines=codelines;
        this.callbacks=callbacks;
        return this;
}
Debug.prototype.checkCallBacks=function(){
    /*
        Validates the callbacks, if they are anonymous functions then leave it
        else for named functions check that the callback is reachable or not.
    */
    for(traverser=0;traverser<this.callbacks.length;traverser++){
        if(!typeof(this.callbacks[traverser])=="function")){
            try{
                var d=this.callbacks[traverser];
                }catch(Exception){
					this.callbacks=D_Helper.removeCallbacks(callbacks,traverser);
				}
        }
    }
}