//import structuredClone from "@ungap/structured-clone";

import { LightningElement, track } from 'lwc';

export default class TMRTHome extends LightningElement {
    @track slidesIndustry = [];
    @track slidesServices = [];
    //@track slideObject = {};
    //@track isShowSlides = false;
    dots = [];
       // let slideIndex = 0;
    showSlidesIndustry() {
        //let slideIndex = 5;
        //let i;
        
        //this.isShowSlides = true;
        // slides = document.getElementsByClassName("mySlides");
        // console.log("*** inside show slides");
        // console.log(slides);
        // //dots = document.getElementsByClassName("dot");
        // for (i = 0; i < slides.length; i++) {
        //     //slides[i].style.display = "none";  
        //     //showSlides = true
        //     slides[i].style.display = "inline";  
        //     console.log('****for');
        // }
        // slideIndex++;
        // if (slideIndex > slides.length) {slideIndex = 1}    
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        // slides[slideIndex-1].style.display = "block";  
        // dots[slideIndex-1].className += " active";
        //setTimeout(showSlides, 2000); // Change image every 2 seconds
        // for ( i = 0; i < slideLength; i++){

        // }
        // console.log('****');
        this.slidesServices = [];
        let industryImages = [
            'https://onedotm.com/wp-content/uploads/2023/08/Industry-man.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Industry-eng_new.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Industry-Healthcare-n.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Industry-Education-Case-Study.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Industry-Education.png'
        ];

        let industryNames = [
            'Manufacturing',
            'Engineering',
            'Healthcare',
            'Real Estate',
            'Education'
        ];

        for (let i = 0; i < industryImages.length; i++){
            //console.log('inside for loop industry images');
            let slideObject = {};
            slideObject.img= industryImages[i];
            slideObject.ind = industryNames[i];
            slideObject.page = i+1;
            this.slidesIndustry.push(slideObject);
        }
        // this.slides.push('https://onedotm.com/wp-content/uploads/2023/08/Industry-eng_new.png');
        // console.log("*** inside show slidesIndustry");
        // console.log(this.slidesIndustry);
        //setTimeout(showSlidesIndustry, 5000);
    }

    showSlidesServices() {
        //let slideIndex = 5;
        //let i;
        
        //this.isShowSlides = true;
        // slides = document.getElementsByClassName("mySlides");
        // console.log("*** inside show slides");
        // console.log(slides);
        // //dots = document.getElementsByClassName("dot");
        // for (i = 0; i < slides.length; i++) {
        //     //slides[i].style.display = "none";  
        //     //showSlides = true
        //     slides[i].style.display = "inline";  
        //     console.log('****for');
        // }
        // slideIndex++;
        // if (slideIndex > slides.length) {slideIndex = 1}    
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        // slides[slideIndex-1].style.display = "block";  
        // dots[slideIndex-1].className += " active";
        //setTimeout(showSlides, 2000); // Change image every 2 seconds
        // for ( i = 0; i < slideLength; i++){

        // }
        // console.log('****');
        this.slidesIndustry = [];
        let servicesImages = [
            'https://onedotm.com/wp-content/uploads/2023/08/Se-Bran-n.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Services-Marketing.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Services-Sales-Funnel.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Services-Lea-n.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Services-Content-Marketing.png',
            'https://onedotm.com/wp-content/uploads/2023/08/Services-Video-Marketing.png'
        ];

        let servicesNames = [
            'Branding & Consulting',
            'Marketing Automation',
            'Sales Funnel',
            'Lead Generation',
            'Content Marketing',
            'Video Marketing'
        ];

        for (let i = 0; i < servicesImages.length; i++){
            //console.log('inside for loop industry images');
            let slideObject = {};
            slideObject.img= servicesImages[i];
            slideObject.ser = servicesNames[i];
            slideObject.page = i+1;
            this.slidesServices.push(slideObject);
        }
        // this.slides.push('https://onedotm.com/wp-content/uploads/2023/08/Industry-eng_new.png');
        // console.log("*** inside show slidesIndustry");
        // console.log(this.slidesIndustry);
        //setTimeout(showSlidesIndustry, 5000);
    }

    /*constructor(){
        console.log("*** inside constructor slides");
        this.showSlides;
    }*/
}