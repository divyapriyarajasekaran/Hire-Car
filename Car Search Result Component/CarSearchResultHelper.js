({
	doInitHelper : function(component, event, helper) {
		helper.callServer(component, "c.getCars",
                          function(response){
                              if(response.length >0){
                                  component.set("v.cars",response);
                                  component.set("v.carFound",true);
                              }else{
                                  component.set("v.carFound",false);
                              }
                          },{
                              carTypeId : component.get("v.carTypeId")
                          });
	},
    
    doSearchHelper : function(component, event, helper){
        var params = event.getParam('arguments');
        
        if(params){
            component.set("v.carTypeId",params.carTypeIdFromMethod);
            this.doInitHelper(component, event, helper);
        }
    },
    
    onSelectCarHelper : function(component, event, helper){
        component.set("v.selectedCarId",event.getParam("carId"));
    }
})