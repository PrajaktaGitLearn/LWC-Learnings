import { LightningElement , wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ID from '@salesforce/user/Id';
import NAME from '@salesforce/schema/User.Email';
import EMAIL from '@salesforce/schema/User.Name';
const  fields = [NAME,EMAIL]
export default class ThirtyEightCom_WireAdapterService extends LightningElement {

    userId = ID
    userDetails
   

    /*
        @wire(getRecord,{recordId:"0055i000007BpERAA0",fields:["User.Name","User.Email"]})
        function(response){
            console.log(response)
        }
    */

        //using function approach
    /* @wire(getRecord,{recordId:"0055i000007BpERAA0",fields:["User.Name","User.Email"]})
    function({data,error}){
        if(data){
            this.userDetails = data.fields
        }
        if(error){
            console.log(error)
        }
        
    }

    // using property approach
    @wire(getRecord,{recordId:"0055i000007BpERAA0",fields:["User.Name","User.Email"]})
    userData
*/

@wire(getRecord,{recordId:"$userId",fields:fields})
    function({data,error}){
        if(data){
            this.userDetails = data.fields
        }
        if(error){
            console.log(error)
        }
        
    }

    // using property approach
    @wire(getRecord,{recordId:"$userId",fields})
    userData

}