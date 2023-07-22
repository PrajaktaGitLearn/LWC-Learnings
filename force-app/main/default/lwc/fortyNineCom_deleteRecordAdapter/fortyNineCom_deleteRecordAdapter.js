import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';
export default class FortyNineCom_deleteRecordAdapter extends LightningElement {
 
    @api recordId
    inputChangeHandler(event){
        this.recordId = event.target.value

    }
    deleteRecordGiven(){
        deleteRecord(this.recordId).then((result) => {
            // alert(`Record having Id ${this.recordId} Deleted Successfully`)
            this.showToastMessage("SUCCESS!!","Contact Record Deleted Successfully","success")
        }).catch(error => {
            // alert(error)
            this.showToastMessage("ERROR!!","Contact Record Deletion Failed please check weather Id exists or not OR provide correct Id","error")
        })
    }

    showToastMessage(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}