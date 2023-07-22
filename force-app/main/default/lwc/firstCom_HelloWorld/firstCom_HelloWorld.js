import { LightningElement, track} from 'lwc';

export default class FirstCom_HelloWorld extends LightningElement {

    name = "Prajakta"
    course = "Zero to Hero in LWC"

    // 2 way data binding

    changeCourse(event){
         
        this.name = event.target.value
    }

    @track employee = {

        empname : "Prajakta",
        empage : 24,
        designation : "Software Engineer",
        organization : "Capgemini Technology India Pvt.Ltd"
    }

    trackChange(event){
        this.employee.organization = event.target.value
       
    }

    // Without using @track
    student = {

        stdname : "Pritam",
        stdage : 17,
        stdclass : "10th",

    }
    trackChange1(event){

        this.student= {...this.student,stdname:event.target.value}
    }

    // getter property

    num1 = 36
    num2 = 10
    get addition(){
        return this.num1 + this.num2
    }
    get substraction(){
        return this.num1 - this.num2
    }


    get multiplication(){
        return this.num1 * this.num2
    }
    get division(){
        return this.num1 / this.num2
    }

    arr = ["Prajakta","Ravi","Neha"]

    get arrayValues(){
        // return this.arr[0]
        return this.arr[0].toUpperCase()
    }

    
}