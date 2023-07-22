import { LightningElement } from 'lwc';
import CRYSTAL_IMAGE from '@salesforce/resourceUrl/crystal_image';
import HORSE_IMAGE from '@salesforce/resourceUrl/floral_horse';
export default class TwentyFourCom_Image_StaticResource extends LightningElement {

    jpg_image = CRYSTAL_IMAGE
    svg_image = HORSE_IMAGE
}