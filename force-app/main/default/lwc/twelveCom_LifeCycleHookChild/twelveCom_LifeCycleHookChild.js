import { LightningElement } from 'lwc';

export default class TwelveCom_LifeCycleHookChild extends LightningElement {
    constructor(){
        super()
        console.log("Child Constructor called")
    }
    connectedCallback(){
        console.log("Child connectedCallback called")
        throw new Error('Child component is failed to load')
    }
    renderedCallback(){
        console.log("Child renderedCallback called")
    }
    disconnectedCallback()
    {
        alert("Child disconnected Callback Called")
    }
    name
    changeHandler(event){
        this.name = event.target.value
    }
}