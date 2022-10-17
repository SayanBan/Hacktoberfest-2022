import { LightningElement,api } from 'lwc';

export default class ChildCmp extends LightningElement {
    @api msg;
    @api displaymsg='Displaying from child to parent';
    


    passValue(){
        const selectEvent =new CustomEvent("processvalue",{
            detail:this.displaymsg
        });
        this.dispatchEvent(selectEvent);
    }
}