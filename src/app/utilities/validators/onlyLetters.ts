import { AbstractControl, ValidationErrors } from "@angular/forms";

export function onlyLetters(): ValidationErrors{
    return(control: AbstractControl) =>{
        const value = control.value as string;
        if(!value) {return;}
        if(value.length === 0 ){ return;}

        if (/[^a-zA-Z]/.test(value)){
            return{
                onlyLetters:{
                    message: 'The name shouldn´t´ve numbers nor special characters'
                }
            };
        }
        return;
    };
}