import { LightningElement ,wire} from 'lwc';
import { getObjectInfo,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
export default class FortyTwoCom_getPicklistValuesByRecordTypeAdapter extends LightningElement {

    selectedRating = ''
    ratingOptions = []
    selectedIndustry = ''
    industryOptions = []

    @wire(getObjectInfo,{objectApiName:ACCOUNT})
    objectInfo

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT,recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistByRecordType({data,error}){
        if(data){
            console.log(data)
            this.ratingOptions = this.generatePicklist(data.picklistFieldValues.Rating)
            this.industryOptions = this.generatePicklist(data.picklistFieldValues.Industry)

        }
        if(error){
            console.error(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item => ({ label:item.label,value:item.value}))
    }

    handleIndustryChange(event){
        this.selectedIndustry = event.target.value
    }

    handleRatingChange(event){
        this.selectedRating = event.target.value
    }

    handleChange(event){
        const {name,value} = event.target

        if(name === "Industry"){
            this.selectedIndustry = value
        }
        if(name === "Rating"){
            this.selectedRating = value
        }

    }
}