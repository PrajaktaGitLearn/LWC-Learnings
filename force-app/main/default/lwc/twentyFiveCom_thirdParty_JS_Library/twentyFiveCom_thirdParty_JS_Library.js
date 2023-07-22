import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/momentJsLibrary';
import ANIMATE from '@salesforce/resourceUrl/animateCssLibrary';
import BOOTSTRAPJS from '@salesforce/resourceUrl/BootstarpCssJsLibrary';
import BOOTSTRAPCSS from '@salesforce/resourceUrl/BootstarpCssJsLibrary';
import {loadScript,loadStyle} from 'lightning/platformResourceLoader';
export default class TwentyFiveCom_thirdParty_JS_Library extends LightningElement {

    todaysDate = ''
    isLibLoaded = false
    renderedCallback(){

        if(this.isLibLoaded){
            return
        }else{

            
             //for multiple asynchronous operations
             
             Promise.all([

                loadStyle(this,ANIMATE+'/animate/animate.min.css'),
                loadScript(this,MOMENT+'/moment/moment.min.js'),
                loadStyle(this,BOOTSTRAPCSS+'/css/bootstrap.min.css'),
                loadScript(this,BOOTSTRAPJS+'/js/bootstrap.min.js')

            ]).then(() => {
                //success
                this.showDate()
            }).catch(error => {
                //error
                console.error(error)
            })
            this.isLibLoaded = true
             

            /*as we have only one asynchronous operation so no need to use Promise.all

            loadScript(this,MOMENT+'/moment/moment.min.js').then(() => {
                //success
                this.showDate()
            }).catch(error => {
                //error
                console.error(error)
            })
            this.isLibLoaded = true
            */
        }

        
    }

    showDate(){
        this.todaysDate =  moment().format('LLLL');
    }

  /*  const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
    }

    -------------------------------
    // Example starter JavaScript for disabling form submissions if there are invalid fields

*/
// renderedCallback(){

//     const forms = this.template.querySelectorAll('.needs-validation')
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
// }
    

form(){

    const forms = this.template.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })

}


    

}