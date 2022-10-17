import { LightningElement ,api,track} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import saveAccount from '@salesforce/apex/ShowContact.saveAccount';
import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';
import Rating from '@salesforce/schema/Account.Rating';

export default class CreateAccount extends NavigationMixin(LightningElement) {
    @track accountObj={
        Name:Name,
        Rating:Rating,
        Phone:Phone
    }
   @api recordId;

    // Name;
    // Phone;
    // Rating;


    


    accountChange(event){
        if(event.target.name ==='name'){
            this.accountObj.Name=event.target.value;
         // this.Name=event.target.value;
        }else if(event.target.name ==='phone'){
            this.accountObj.Phone=event.target.value;
            //this.Phone=event.target.value;
        }
        else if(event.target.name ==='rating'){
            this.accountObj.Rating=event.target.value;
            //this.Rating=event.target.value;
        }
    }



    saveAccount(event){

     //   createAccount({Name: this.Name,phone:this.Phone,Rating:this.Rating})

        console.log('AccountObj----------->', this.accountObj);
        console.log('AccountObj JSON----------->', JSON.stringify(this.accountObj));
        saveAccount({obj:this.accountObj})
        .then(result=>{
            console.log('Account obj----------->',result);
        })
        .catch(error=>{
            console.log('Error---------->',error);
        })
    }



    navigateToNewAccountPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            },
        });
    }




    navigateToViewAccountPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0015g00000Q2rxSAAR',
                objectApiName:'Account',
                actionName:'view'
            },
        });
    }



    navigateToDemoTraining(){
        let componentDef={
            componentDef:"c:demoTraining",
        }
        //encoded string to base 64
        let encodedcomponentDef =btoa(JSON.stringify(componentDef));
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+encodedcomponentDef
            },
        });
    }
}