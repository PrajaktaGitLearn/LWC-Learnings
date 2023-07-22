import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';
export default class ThirtyCom_GetUserInformation extends LightningElement {

    userid = ID
    isguest = IS_GUEST
}