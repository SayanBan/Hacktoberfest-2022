import { LightningElement,api } from 'lwc';

export default class ParentCmp extends LightningElement {

    @api message='Hello World!!!!!!';
    visible;
    fromChild;
    showChildCmp(){
        this.visible=true;

    }

    getValue(event){
        this.fromChild=event.detail;
    }
}