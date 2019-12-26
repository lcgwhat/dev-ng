import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {catchError, map} from 'rxjs/operators';
import Result from '../../common/resule';
import {Observable, of} from 'rxjs';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})

export class PhoneValidatorDirective implements AsyncValidator {

  constructor(private us: UserService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   // 管道 rxjs
    return this.us.existName(control.value).pipe(
      map((r: Result<string>) => {
        return r.code === 200 ? null : {existName: true};
      }),
      catchError(e => of({existName: true}))
    );
  }


}
