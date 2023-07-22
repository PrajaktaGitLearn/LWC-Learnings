({
    handleMessage : function(component, message, helper) {

        if(message != null && message.getParam("messageToSendOne") != null){
            component.set("v.messageRecieved",message.getParam("messageToSendOne").value)
        }
    },
    inputHandler : function(component, event, helper) {
        var msg = event.target.value;
        component.set("v.messagetopublish",msg);

    },
    publishMessage : function(component) {

        var msg = component.get("v.messagetopublish");
        var message = {
            messageToSendOne:{

                value:msg
            }
        }
        component.find("mymessagechannel").publish(message);

    }
})
