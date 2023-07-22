import { LightningElement } from 'lwc';

export default class TwelveCom_LifeCycleHookParent extends LightningElement {
    constructor(){
        super()
        console.log("Parent constructor called")
    }
    connectedCallback(){
        console.log("Parent ConnectedCallback Called")
    }
    renderedCallback(){
        console.log("Parent rendered callback called")
    }

    name
    changeHandler(event){
        this.name = event.target.value
    }

    isChildVisible = false

    changeVisible(){

        this.isChildVisible = !this.isChildVisible
    }
    errorMessage
    errorCallback(error,stack){
        this.errorMessage = error.message
        console.log(error.message)

        console.log(stack)
    }
}