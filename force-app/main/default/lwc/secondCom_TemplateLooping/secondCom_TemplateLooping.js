import { LightningElement } from 'lwc';

export default class SecondCom_TemplateLooping extends LightningElement {

    emparr = ["Prajakta","Ravi","Seema","Nikita","Kalyani"] ;

    stdlist = [

        {
            stname : "Neha",
            roll_no : 1,
            class : "10th"
        },
        {
            stname : "Nikita",
            roll_no : 2,
            class : "12th"
        },
        {
            stname : "Seeta",
            roll_no : 3,
            class : "10th"
        },
        {
            stname : "Neha",
            roll_no : 4,
            class : "11th"
        }

    ]
}