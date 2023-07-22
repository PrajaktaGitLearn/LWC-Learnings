import { LightningElement ,wire} from 'lwc';
import MESSGECHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';
import SECONDMESSGECHANNEL from '@salesforce/messageChannel/MySecondMessageChannel__c';
import { subscribe,MessageContext, APPLICATION_SCOPE, unsubscribe, publish } from 'lightning/messageService';

export default class TwentyTwoCom_LMS_Publisher extends LightningElement {

    inputValue
    messageRecieved
    subscription

    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
       this.subscription =subscribe(this.context,MESSGECHANNEL,(messagetosend) => {this.handleMessage(messagetosend)},{scope:APPLICATION_SCOPE})
    }

    handleMessage(messagetosend){
        
        this.messageRecieved = messagetosend.messageToSendOne.value ? messagetosend.messageToSendOne.value :"No Message Published"
    }

    /* unsubscribeHandler(){
       unsubscribe(this.subscription) 
       this.subscription = null
    }*/

    

    inputHandler(event){
        this.inputValue = event.target.value
    }

    publishHandler(){

        const message = {
            messageToSend:{
                value:this.inputValue 
            }
        }

        publish(this.context,SECONDMESSGECHANNEL,message)
    }

    

}