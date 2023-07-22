import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ThirtyTwoCom_Toast_Notification extends LightningElement {

    ShowSuccessToast(){

       const evnt = new ShowToastEvent({

            title:"SUCCESS",
            message:"Success Toast",
            variant:"success"
        })
        this.dispatchEvent(evnt)
    }

    ShowErrorToast(){
        const evnt = new ShowToastEvent({

            title:"ERROR",
            message:"Error Toast",
            variant:"error",
            mode:"pester"
        })
        this.dispatchEvent(evnt)

    }

    ShowWarningToast(){

        const evnt = new ShowToastEvent({

            title:"WARNING",
            message:"Warning Toast",
            variant:"warning",
            mode:"sticky"
        })
        this.dispatchEvent(evnt)

    }

    ShowInfoToast(){

        const evnt = new ShowToastEvent({

            title:"INFORMATION",
            message:"Information Toast",
            variant:"info"
        })
        this.dispatchEvent(evnt)

    }
}