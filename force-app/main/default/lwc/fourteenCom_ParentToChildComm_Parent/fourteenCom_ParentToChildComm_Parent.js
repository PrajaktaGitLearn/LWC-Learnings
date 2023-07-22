import { LightningElement } from 'lwc';

export default class FourteenCom_ParentToChildComm_Parent extends LightningElement {
    carouselData = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description:"First card description.",
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description:"Second card description.",
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description:"Third card description.",
        }
    ]

    progressVal = 10

    changeProgress(event){
        this.progressVal = event.target.value
    }

    sliderVal = 10 

    changeSlider(event){
        this.sliderVal = event.target.value
    }

    ResetSlider(){
        this.template.querySelector('c-fourteen-com_-parent-to-child-comm_-child4').resetSlider()
    }
}
