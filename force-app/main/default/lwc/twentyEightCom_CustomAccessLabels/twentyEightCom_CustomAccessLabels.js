import { LightningElement } from 'lwc';
import LABELONE from '@salesforce/label/c.LabelOne'
import LABELTWO from '@salesforce/label/c.LabelTwo'
export default class TwentyEightCom_CustomAccessLabels extends LightningElement {

    LABELS = {
        firstlabel : LABELONE,
        secondlabel : LABELTWO
    }
}