import { LightningElement, wire} from 'lwc';
import {NavigationMixin,CurrentPageReference} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class ThirtyThreeCom_NavigationService extends NavigationMixin(LightningElement) {
    
    navigatToHome(){

        this[NavigationMixin.Navigate]({

            type:"standard__namedPage",
            attributes:{
                pageName:"home"
            }
        })

    }

    navigatToChatter(){

        this[NavigationMixin.Navigate]({

            type:"standard__namedPage",
            attributes:{
                pageName:"chatter"
            }
        })


    }

    navigatToNewRecord(){

        this[NavigationMixin.Navigate]({

            type:"standard__objectPage",
            attributes:{

                objectApiName : "Account",
                actionName:"new"
            }
        })

    }

    navigatToNewRecordWithDefaultValues(){
        const defaultValue = encodeDefaultFieldValues({
            Name:"Account one",
            AnnualRevenue: 10000000,
            Active__c:"Yes"
        })

        this[NavigationMixin.Navigate]({

            type:"standard__objectPage",
            attributes:{

                objectApiName : "Account",
                actionName:"new"
            },
            state:{
                defaultFieldValues:defaultValue
            }
        })

    }

    navigatToListView(){

        this[NavigationMixin.Navigate]({

            type:"standard__objectPage",
            attributes:{

                objectApiName : "Account",
                actionName:"list"
            },
            state:{
               filterName:"Recent"
            }
        })

    }

    navigatToFiles(){

        this[NavigationMixin.Navigate]({

            type:"standard__objectPage",
            attributes:{

                objectApiName : "ContentDocument",
                actionName:"home"
            }
        })
    }

    navigatToRecordPageInViewMode(){

        this[NavigationMixin.Navigate]({

            type:"standard__recordPage",
            attributes:{

                recordId:"0015i00000fhKwVAAU",
                objectApiName : "Account",
                actionName:"view"
            }
        })
    }
    navigatToRecordPageInEditMode(){

        this[NavigationMixin.Navigate]({

            type:"standard__recordPage",
            attributes:{

                recordId:"0015i00000fhKwVAAU",
                objectApiName : "Account",
                actionName:"edit"
            }
        })
    }

    navigatToTab(){

        this[NavigationMixin.Navigate]({

            type:"standard__navItemPage",
            attributes:{

                apiName:"Lightning_Messaging_Service"
            }
        })

    }

    navigatToRelatedRecord(){

        this[NavigationMixin.Navigate]({

            type:"standard__recordRelationshipPage",
            attributes:{

                recordId:"0015i00000fhKwVAAU",
                objectApiName : "Account",
                relationshipApiName:"Contacts",
                actionName:"view"
            }
        })
    }

    navigatToWebPage(){

        this[NavigationMixin.Navigate]({

            type:"standard__webPage",
            attributes:{

                url:"https://trailhead.salesforce.com/P"
            }
        })

    }

    navigatToLwcComponent(){

        var defination = {
            componentDef:"c:thirtyThreeCom_NavigationServiceTarget1"
            // attributes:{
            //     recordId:"2098128ASS443"
            // }
        }
        this[NavigationMixin.Navigate]({

            type:"standard__webPage",
            attributes:{
                url:"/two/two.app#"+btoa(JSON.stringify(defination))
            }
        })

    }

    navigatToAuraComponent(){

        this[NavigationMixin.Navigate]({

            type:"standard__component",
            attributes:{
                componentName:"c__thirtyThreeCom_NavigationService_AuraTarget"
            },
            state:{
                "c__valueFromLwc":"332323334"
            }
        })

    }
    
    navigatToVfPage(){

        this[NavigationMixin.Navigate]({

            type:"standard__webPage",
            attributes:{
                url:"/apex/vfTarget"
            }
        }).then(generatedUrl => {
            console.log(generatedUrl)
            window.open(generatedUrl,"_blank")
        })

    }

    @wire(CurrentPageReference)
    pageRef

    get z(){
        return this.pageRef ? JSON.stringify(this.pageRef,null,2):''
    }
}