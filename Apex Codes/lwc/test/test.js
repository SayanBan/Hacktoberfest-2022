import { LightningElement,track,api,wire } from 'lwc';
import showAllContact  from '@salesforce/apex/test.showAllContact';
import saveAccount  from '@salesforce/apex/test.saveAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
import Name from '@salesforce/schema/Account.Name';
import Rating from '@salesforce/schema/Account.Rating';
import Phone from '@salesforce/schema/Account.Phone';

export default class Test extends NavigationMixin(LightningElement) {

 @api recordId;
@api passValue='Hello World!!!!'
variable;
    showChild;
  @track  accountObj={
        Name:Name,
        Phone:Phone,
        Rating:Rating
    };

     showInterest;
    @track principle;
    @track rate;
    @track spinner;
     time;
    @api interest;
    @track contactList;
    @track contactDetails =false;

    @wire(showAllContact,{conId:'$recordId'})
    getcontact({data,error}){
        if(data){
            this.contactList=data; 
            console.log('this.contactList------->',this.contactList);
        }
        if(error){
            console.log('error------->',error);
        }
    }



    // connectedCallback(){
    //  showAllContact()
    //     .then(result=>{
    //         this.contactList=result;
    //         console.log('ContactList------------>'+ this.contactList);
    //     })
    // }

    handleChange(event){
         console.log('Record id------------',this.recordId);
        // console.log('Name ----->',event.target.name);
        // console.log('Label ----->',event.target.label);

        if(event.target.name=='principle'){
            this.principle=event.target.value;
        //    this.calculateSi();

            console.log('Principle----------->'+ this.principle);
        }else if(event.target.name=='rate'){
            this.rate=event.target.value;
           // this.calculateSi();
            console.log('Rate----------->'+ this.rate);
        }else if(event.target.name=='time'){
            this.time=event.target.value;
          //  this.calculateSi();
            console.log('Time----------->'+ this.time);
        }

    }

    calculateSi(){
       // this.spinner=true;
        if((this.principle=='' || this.principle==null)|| (this.rate==''|| this.rate==null) || (this.time=='' || this.time==null)){
          this.showInterest=false;
            const event=new ShowToastEvent({
                title:'Error',
                message:'SI cannot be calculated',
                variant:'error'
            });
            this.dispatchEvent(event);
           // this.dispatchEvent(toastev);
        }else {
            this.showInterest=true;
            this.dispatchEvent(new ShowToastEvent({
                title:'Success',
                message:'SI calculated Successfully',
                variant:'success',
            }),
            );
        this.interest=(this.principle* this.rate*this.time)/100;
        console.log('Interest------------>',this.interest);
        }
    }

    showContact(){
        this.contactDetails=true;
    }


    
    navigateToViewAccountPage() {
        
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015g00000Q2rxSAAR',
                objectApiName: 'Account',
                actionName: 'view'
            },
            
        });
      //  this.spinner=false;
       
    }
    


    navigateToNewAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        });
    }


    OpportunityPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new'
            },
        });

      /*  this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
               // recordId: '0065g00000ENAzUAAX',
                objectApiName: 'Opportunity',
                actionName: 'new'
            },
        });
        */
       
   }


//    navigateToLightningComponent(event) {
//    // event.preventDefault();
//     let componentDef = {
//         componentDef: "c:demoTraining",
       

//     };
//     // Encode the componentDefinition JS object to Base64 format to make it url addressable
//     let encodedComponentDef = btoa(JSON.stringify(componentDef));
//     this[NavigationMixin.Navigate]({
//         type: 'standard__webPage',
//         attributes: {
//             url: '/one/one.app#' + encodedComponentDef
//         }
//     });
// }


navigateToLightningComponent(){

    let componentDef={
        componentDef:"c:demoTraining",
    };

    let encodedComponentDef = btoa(JSON.stringify(componentDef));
    this[NavigationMixin.Navigate]({
        type:'standard__webPage',
        attributes:{
            url: '/one/one.app#'+ encodedComponentDef
        }
    });
}

  


accountChange(event){
    if(event.target.name==='name'){
        this.accountObj.Name=event.target.value;
        console.log(' this.accountObj.Name::', this.accountObj.Name);
    }else if(event.target.name=='Rating'){
        this.accountObj.Rating=event.target.value;
        console.log(' this.accountObj.Rating::', this.accountObj.Rating);
    }else if(event.target.name==='phone'){
        this.accountObj.Phone=event.target.value;
        console.log(' this.accountObj.Phone:::', this.accountObj.Phone);
       
    }
}



saveAccount(){
    this.showChild=true;
    // console.log(' this.accountObj:::', this.accountObj);
    // saveAccount({obj:this.accountObj})
    // .then(result=>{
    //     console.log('Result------------>',result);
    // })
    // .catch(error=>{
    //     console.log('Error------------->',error);
    // })
}


getonProcess(event){
this.variable=event.detail;
}


}


/* variant ----{Success,info,warning,error}
{title--
message---
variant---}


*/