import { LightningElement ,api,wire} from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';
export default class FortySixCom_getRecordUiAdapter extends LightningElement {

    recordUiFields = [
        {fieldName : "AccountNumber",label:"Account Number"},
        {fieldName : "AnnualRevenue" ,label:"Annual Revenue"},
        {fieldName : "Name",label:"Account Name"},
        {fieldName : "Phone",label:"Account Phone"}
    ]
    @api recordId                                                                                       

    @wire(getRecordUi,{recordIds:'$recordId',layoutTypes:'Full',modes:'Edit'})
    fetchRecordUi({data,error}){
        if(data){
            console.log("getRecordUi",data)
            this.recordUiFields = this.recordUiFields.map(item => {

                return {...item,value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error)
        }
    }
}