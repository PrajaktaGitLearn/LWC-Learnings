import { LightningElement } from 'lwc';
import searchAccountList from '@salesforce/apex/FiftyCom_Class_getAccountList.searchAccountList';
export default class FiftyThreeCom_Call_Apex_Method_Imperatively_With_Params extends LightningElement {

    accounts 
    searchKey = ''
    timer

    searchHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        this.timer = setTimeout(() => {
            this.callApexMethod()
        },1000)
       

    }

    callApexMethod(){

        searchAccountList({searchkey:this.searchKey}).then(result => {
            this.accounts = result

        }).catch(error => {
            console.error(error)
        })
    }
}