({
    doInit : function(component, event, helper) {

        var pageReference = component.get("v.pageReference");
        var paramVal = pageReference.state.c__valueFromLwc
        component.set("v.valueFromLwc",paramVal)
    }
})
