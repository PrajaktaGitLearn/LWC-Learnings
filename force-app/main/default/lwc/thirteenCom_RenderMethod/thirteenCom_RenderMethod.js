import { LightningElement } from 'lwc';
import signInTemplate from './thirteenCom_RenderMethod_SignIn.html';
import signUpTemplate from './thirteenCom_RenderMethod_SignUp.html';
import renderTemplate from './thirteenCom_RenderMethod.html';
export default class ThirteenCom_RenderMethod extends LightningElement {

    render(){
        return this.selectedTemplate === 'SignUp' ? signUpTemplate :
        this.selectedTemplate === 'SignIn' ? signInTemplate : renderTemplate
        i

    }

    selectedTemplate = ''
    handleLogin(event){

        this.selectedTemplate = event.target.label
    }

    handleClick(event){
        console.log(`${event.target.label} successfully`)
    }
}