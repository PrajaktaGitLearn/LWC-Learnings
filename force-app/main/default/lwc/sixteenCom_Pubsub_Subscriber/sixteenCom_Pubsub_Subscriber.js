import { LightningElement } from 'lwc';
import pubsub from 'c/sixteenCom_Pubsub';
export default class SixteenCom_Pubsub_Subscriber extends LightningElement {

    message
    connectedCallback(){
        this.subscribeEvent()
    }

    subscribeEvent(){
        pubsub.subscribe('publisherEvent',(message) => {
            this.message = message
        })
    }
}