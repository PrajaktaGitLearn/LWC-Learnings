import { LightningElement, wire} from 'lwc';
import getAccountList from '@salesforce/apex/FiftyCom_Class_getAccountList.getAccountList';
export default class FiftyCom_Apex_Method_Using_Wire extends LightningElement {

    accountListRetrieved
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountList({data,error}){
        if(data){

            console.log(data)
            this.accountListRetrieved = data.map(item => {
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :  
                              item.Type === 'Customer - Direct' ? 'Direct' : '--------------'

                return {...item,newType}
            })
        }
        if(error){
            console.error(error)
        }
    }
}