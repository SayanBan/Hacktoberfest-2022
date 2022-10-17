import { LightningElement,track,api,wire } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import fetchContact from '@salesforce/apex/ShowContact.fetchContact';


export default class DemoTraining extends LightningElement {
@api recordId;
@api objectApiName;
@track principle;
@track rate;
@track time;
@track interest;
 showinterest;
 contactVisible;
 contactList;


 @wire(fetchContact,{conId:'$recordId'})
 fetchContact({data,error}){
     if(data){
         console.log('Data-------------->',data);
         this.contactList=data;
     }
     if(error){
         console.log('Error------------------>',error);
     }
 }

//  connectedCallback(){
//     console.log('recordId--------->',this.recordId);
//      console.log('objectname--------->',this.objectApiName);
//     fetchContact()
//     .then(result=>{
//         this.contactList=result;
//         console.log('Contact List-------------->',result);
//     })
//     .catch(error=>{
//         console.log('Eroor---------------->',error);
//     })
//  }

handleChange(event){
    if(event.target.name=='principle'){
        this.principle=event.target.value;
    
        
    }
    else if(event.target.name=='rate'){
        this.rate=event.target.value;
    }else if(event.target.name=='time'){
        this.time=event.target.value;
    }
}




showcontact(){
    this.contactVisible=true;
}



/*

    handleprinciple(event){
        this.principle=event.target.value;
        console.log('Principle--------->',this.principle);
        this.calculateSi();
    }


    handlerate(event){
        this.rate=event.target.value;
        console.log('Rate---->',this.rate);
        this.calculateSi();
    }

    handletime(event){
        this.time=event.target.value;
        console.log('Time---->',this.time);
        this.calculateSi();
    }
*/

    calculateSi(){
        if((this.principle =='')||(this.principle ==null) ||(this.rate=='')||(this.time=='') ){
            this.showinterest=false;
            const evt= new ShowToastEvent({
                title:'Error',
                message:'Si cannot be calculated',
                variant:'error',
            });
            this.dispatchEvent(evt);
        }else{
            const evt= new ShowToastEvent({
                title:'Success',
                message:'Si calculated Successfully.',
                variant:'success',
            });
            this.dispatchEvent(evt);
            this.interest=(this.principle* this.rate* this.time)/100;
            console.log('this.interest----->'+this.interest);
            this.showinterest=true;
        }






       
    }












// inputvalue;
// handlevalue;
// options=[{
//     label:'Delhi',
//     value:'Delhi'
// },
// {
//     label:'Mumbai',
//     value:'Mumbai'
// },
// {
//     label:'Kolkata',
//     value:'Kolkata'
// },
// ]



    // handlechange(event){
    // //console.log('InputValue-',event.target.value);

    // this.inputvalue=event.target.value;
    // console.log('LabelName---->',event.target.label);
    // console.log('Name--->',event.target.name);
    // console.log('inputvalue-->', this.inputvalue);
   
    // }



    // combobox(event){
    //     this.handlevalue=event.target.value;
    //     console.log(' this.handlevalue:', this.handlevalue);
    // }
    
}