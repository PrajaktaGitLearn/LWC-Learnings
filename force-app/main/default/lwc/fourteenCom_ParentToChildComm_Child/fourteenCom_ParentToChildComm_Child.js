import { LightningElement ,api} from 'lwc';

export default class FourteenCom_ParentToChildComm_Child extends LightningElement {
    @api cardTitle
    @api printMessage

    @api carouselCard
    @api carouselDetails

}