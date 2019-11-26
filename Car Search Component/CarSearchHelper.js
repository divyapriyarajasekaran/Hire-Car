({
	doSubmitFormHelper : function(component, event, helper) {
        var carTypeId = event.getParam('carTypeId');	
        console.log('the car type Id is : ' +carTypeId);
        
        var carSearchResultVar = component.find("carSearchResult");
        
        var carFoundResults = carSearchResultVar.searchCars(carTypeId);
        console.log('aura method results :' + carFoundResults);
	}
})