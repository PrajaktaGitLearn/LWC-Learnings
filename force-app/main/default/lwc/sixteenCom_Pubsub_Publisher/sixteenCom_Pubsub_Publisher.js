import { LightningElement } from 'lwc';
import pubsub from 'c/sixteenCom_Pubsub'
export default class SixteenCom_Pubsub_Publisher extends LightningElement {

    message 

    changeHandler(event){
        this.message = event.target.value
    }

    publishHandler(){
        pubsub.publish('publisherEvent',this.message)
    }
}