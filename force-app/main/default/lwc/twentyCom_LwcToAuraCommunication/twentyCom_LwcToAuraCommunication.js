import { LightningElement ,api} from 'lwc';

export default class TwentyCom_LwcToAuraCommunication extends LightningElement {
    @api msgfromaura

    sendData(){
        const sendData = new CustomEvent('senddata',{
            detail:{
                "sendername":"Prajakta",
                "senderage":24,
                "sendercompany":"Capgemini India"
            }
        })
        this.dispatchEvent(sendData)
    }
}