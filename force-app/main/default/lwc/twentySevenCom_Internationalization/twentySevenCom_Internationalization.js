import { LightningElement } from 'lwc';
import CURRENCY from '@salesforce/i18n/currency';
import LOCALE from '@salesforce/i18n/locale';

export default class TwentySevenCom_Internationalization extends LightningElement {

    number = 55454.87
    
    formattedNumber = new Intl.NumberFormat(LOCALE,{
        style:'currency',
        currency:CURRENCY,
        currencyDisplay:'symbol'
    }).format(this.number)
}