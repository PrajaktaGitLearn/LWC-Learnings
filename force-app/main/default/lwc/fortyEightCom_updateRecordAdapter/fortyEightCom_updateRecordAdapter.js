import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT from '@salesforce/schema/Contact';
import { updateRecord } from 'lightning/uiRecordApi';
const COLUMNS = [
    {label:"Name",fieldName:"Name",type:"text"},
    {label:"Id",fieldName:"Id",type:"text"},
    {label:"Phone",fieldName:"Phone",type:"phone",editable:true},
    {label:"Email",fieldName:"Email",type:"email",editable:true},
    {label:"Title",fieldName:"Title",type:"text"},
]
export default class FortyEightCom_updateRecordAdapter extends LightningElement {
    
    columns = COLUMNS
    contacts = []
    draftValues = []


    @wire(getListUi,{objectApiName : CONTACT,listViewApiName:'AllContacts'})
    getRecordsFromListView({data,error}){
        if(data){
            console.log("UpdateRecord", data)
            this.contacts = data.records.records.map(item =>{

                return {
                        "Name":this.getValue(item,'Name'),
                        "Id":this.getValue(item,'Id'),
                        "Phone":this.getValue(item,'Phone'),
                        "Email":this.getValue(item,'Email'),
                        "Title":this.getValue(item,'Title')

                        }
            })
        }if(error){
            console.error(error)
        }
    }

    getValue(data,field){
        return data.fields[field].value
    }

    handleSave(event){
        event.preventDefault()
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInputs = event.detail.draftValues.map( draft => {
            const fields = {...draft}
            return {fields:fields}
        })

        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then(() => {
            console.log('Contact Updated successfully')
            this.draftValues = []
        }).catch(error => {
            console.log("Error updating record",error)
        })


    }

}