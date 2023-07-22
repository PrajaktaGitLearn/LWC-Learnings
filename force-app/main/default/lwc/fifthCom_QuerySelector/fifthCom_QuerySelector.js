import { LightningElement } from 'lwc';

export default class FifthCom_QuerySelector extends LightningElement {

    pelement
    organization = ["Capgemini","Tcs","Cognizant","Accenture"];
    
    accessElements(){

        const chelem = this.template.querySelector('.lwcdom')
        chelem.innerHTML = '<p> Hi I am Child element </p>'

        this.pelement = this.template.querySelector('p').innerText
        console.log(this.pelement)
        

        const elem = this.template.querySelector('p')
        elem.style.border = "2px solid red"
        console.log(elem.innerText)
      
        const orgElement = this.template.querySelectorAll('.arrelem')
        let elemarr = Array.from(orgElement).forEach(item => {
            console.log(item.innerText.toUpperCase())
            item.setAttribute("title",item.innerText)
        })
        
        elemarr.forEach(item => {
        console.log(item.innerText.toUpperCase())
        //item.setAttribute("title",item.innerText)

        
        
       })

     
       
        
    }

    

}