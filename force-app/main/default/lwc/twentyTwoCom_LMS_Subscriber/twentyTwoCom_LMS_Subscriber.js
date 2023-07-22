import { LightningElement,wire } from 'lwc';
import MESSGECHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';
import SECONDMESSGECHANNEL from '@salesforce/messageChannel/MySecondMessageChannel__c';
import { subscribe,MessageContext, APPLICATION_SCOPE, unsubscribe, publish } from 'lightning/messageService';
export default class TwentyTwoCom_LMS_Subscriber extends LightningElement {

    subscription
    recievedMessage
    sendValue

    @wire(MessageContext)
    context;
    
    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
       this.subscription =subscribe(this.context,SECONDMESSGECHANNEL,(message) => {this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }

    handleMessage(message){

        this.recievedMessage = message.messageToSend.value ? message.messageToSend.value :"No Message Published"
    }
 

   /* unsubscribeHandler(){
        unsubscribe(this.subscription)
        this.subscription = null
    }*/


inputHandler(event){
    this.sendValue = event.target.value
}

publishHandler(){

    const messagetosend = {
        messageToSendOne:{
            value:this.sendValue 
        }
    }
    publish(this.context,MESSGECHANNEL,messagetosend)
}
    


}