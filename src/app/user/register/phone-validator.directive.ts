import { Directive } from '@angular/core';
import {AsyncValidator, NG_ASYNC_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})
export class PhoneValidatorDirective implements AsyncValidator {

  constructor() { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | ValidationErrors | null {
    return undefined;
  }

}
