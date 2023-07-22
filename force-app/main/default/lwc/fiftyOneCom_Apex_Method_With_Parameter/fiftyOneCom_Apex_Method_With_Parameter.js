import { LightningElement,wire } from 'lwc';
import filteredAccountList from '@salesforce/apex/FiftyCom_Class_getAccountList.filteredAccountList';
export default class FiftyOneCom_Apex_Method_With_Parameter extends LightningElement {

    selectedType = ''
    @wire(filteredAccountList,{type:'$selectedType'})
    filteredAccounts

    get options() {
        return [
            { label: 'Customer - Channel', value: 'Customer - Channel' },
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Prospect', value: 'Prospect' }
        ];
    }

    handleChange(event) {
        this.selectedType = event.detail.value;
    }
}