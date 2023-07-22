import { LightningElement ,wire} from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi';
export default class FortyFiveCom_getNavItemsAdapter extends LightningElement {

    navItemData

    @wire(getNavItems,{pageSize:15,navItemNames:['standard-Account']})
    fetchNavigationItems({data,error}){

        if(data){
            console.log("NavData",data)
            this.navItemData = data.navItems[0]
        }
        if(error){
            console.error(error)
        }
    }
}