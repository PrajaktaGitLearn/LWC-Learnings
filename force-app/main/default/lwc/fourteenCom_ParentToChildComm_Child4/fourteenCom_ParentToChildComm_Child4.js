import { LightningElement ,api} from 'lwc';

export default class FourteenCom_ParentToChildComm_Child4 extends LightningElement {
    @api sliderValue

    @api resetSlider(){
        this.sliderValue = 50
    }
}