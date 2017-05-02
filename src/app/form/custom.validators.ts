import { AbstractControl } from "@angular/forms";

export function ageValidator(control: AbstractControl): { [key: string]: any } {
  let today = new Date();
  let minAge = 16;
  let maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  if (!control.value) {
    return null;
  }
  else {
    let value = control.value;
    let selectedDate = control.value.date;
    if (selectedDate.year > maxDate.getFullYear()) {
      return { "ageValidator": { value } };
    }
    else {
      return null;
    }
  }
}
