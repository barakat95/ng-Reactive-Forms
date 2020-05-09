import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") {
      return { "invalid Project Name": true };
    } else return null;
  }
  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "testProject") {
          return resolve({ "invalid Project Name": true });
        } else return reject(null);
      }, 1000);
    });
    return promise;
  }
}
