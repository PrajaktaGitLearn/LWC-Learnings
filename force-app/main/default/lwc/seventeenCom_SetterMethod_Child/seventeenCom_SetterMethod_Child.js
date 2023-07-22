import { LightningElement ,api} from 'lwc';

export default class SeventeenCom_SetterMethod_Child extends LightningElement {

    userdetails
    userdepartment

    @api 
    get detail(){
        return this.userdetails
    }
    set detail(data){

        this.userdetails = {...data,age:data.age*2,"location":"Pune"}

    }

    @api
    get department(){
        return this.userdepartment
    }
    set department(data){
        this.userdepartment = data +"Pune"
    }
}