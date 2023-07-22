import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/FiftyCom_Class_getAccountList.getAccountList';
export default class FiftyTwoCom_Call_Apex_Method_Imperatively extends LightningElement {

    accounts

    handleClick(){

        getAccountList().then(result => {
            console.log('Result',result)
            this.accounts = result

        }).catch(error => { 
            console.error(error)
        })
    }
}