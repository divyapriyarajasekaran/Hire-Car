({
    doInitHelper : function(component, event, helper){
        var isAvailable = $A.get("e.force:createRecord");
        if(isAvailable){
            component.set("v.showNew",true);
        } else {
            component.set("v.showNew",false);
        }
        
        /*var action = component.get("c.getCarTypes");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.carTypes",response.getReturnValue());
            } else if(state === "ERROR"){
                alert("Unknown error");
            }
        });
    	$A.enqueueAction(action);*/
        
        helper.callServer(component, "c.getCarTypes", 
                          function(response){
                              component.set("v.carTypes",response);
                          }); 
    },
    
    onclickOfSearchHelper : function(component, event, helper) {
    	var searchFormSubmit = component.getEvent("searchFormSubmit");
        searchFormSubmit.setParams({
            "carTypeId" : component.find("carTypeList").get("v.value")
        });
        searchFormSubmit.fire();
	},

    createNewRecordHelper : function(component, event, helper){
        var createNewRecord = $A.get("e.force:createRecord");
        
        if(createNewRecord){
            createNewRecord.setParams({
                "entityApiName" : "Car_Type__c"
            });
            createNewRecord.fire();
        } else{
            console.log('This createRecord event is not supported');
        }
    }
})