import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
// Reactive
// import { AbstractControl, ValidatorFn } from '@angular/forms';
// // Template
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function aplhabaticNameValidator(nameRe: RegExp): ValidatorFn {
    const reg = new RegExp(/^[a-zA-Z]+$/);
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = reg.test(control.value);
    return forbidden ? {'title': {value: control.value}} : null;
  };
}
