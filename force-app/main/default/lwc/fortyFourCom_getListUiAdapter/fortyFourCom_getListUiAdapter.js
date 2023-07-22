import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT from '@salesforce/schema/Account';
import PHONE from '@salesforce/schema/Account.Phone';
export default class FortyFourCom_getListUiAdapter extends LightningElement {
    
    accounts
    pageToken = null
    previousPageToken = null
    nextPageToken = null

    @wire(getListUi,{objectApiName:ACCOUNT,listViewApiName:'AllAccounts',sortBy:PHONE,pageSize:15,pageToken:'$pageToken'})
    fetchListView({data,error}){
        if(data){
            console.log(data)
            this.accounts = data.records.records
            this.previousPageToken = data.records.previousPageToken
            this.nextPageToken = data.records.nextPageToken

        }
        if(error){
            console.log(error)
        }
    }

    previousToken(){
        this.pageToken = this.previousPageToken
    }

    nextToken(){
        this.pageToken = this.nextPageToken
    }
}