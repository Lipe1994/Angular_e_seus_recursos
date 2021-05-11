import { FormGroup } from "@angular/forms";

export class GenericValidator{
    constructor(private validationMessages: ValidationMessages){}

    handleMessages(form : FormGroup) : {[key: string] :string}{ 

        let messages = {};

        for(let index in form.controls){
            if(form.controls.hasOwnProperty(index))//garantindo que a key/propert existe dentro dos controles
            {
                let control = form.controls[index];

                if(control instanceof FormGroup)//porque dentro de um control pode ter outro formGroup
                {
                    let auxMessages = this.handleMessages(control);
                    Object.assign(messages, auxMessages);
                }else{
                    if(this.validationMessages[index])
                    {
                        messages[index] = "";
                        if((control.dirty || control.touched) && control.errors)
                        {
                            Object.keys(control.errors).map(erroKey =>
                                {
                                    if(this.validationMessages[index][erroKey])
                                    {
                                        messages[index] += this.validationMessages[index][erroKey] +" <br />"
                                    }
                                      
                                });
                        }
                    }
                }
            }
        }
        

        return messages;
    }

}

export interface DisplayMessage{
    [key: string]: string
}

export interface ValidationMessages{
    [key: string] : {[key:string] : string}
}