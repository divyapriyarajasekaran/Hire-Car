({
	onCarSelectHelper : function(component, event, helper) {
		var car  = component.get("v.car");
        
        var evt = component.getEvent("carSelectEvent");
        evt.setParams({
            "carId" : car.Id
        });
        evt.fire();
	}
})