({
    gwtLwcEventData : function(component, event, helper) {

        var senderName = event.getParam('sendername');
        var senderage = event.getParam('senderage');
        var sendercompany = event.getParam('sendercompany');

        component.set("v.SenderName",senderName);
        component.set("v.SenderAge",senderage);
        component.set("v.SenderCompany",sendercompany);

    }
})
