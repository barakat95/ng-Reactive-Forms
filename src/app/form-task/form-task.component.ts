import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-form-task",
  templateUrl: "./form-task.component.html",
  styleUrls: ["./form-task.component.css"]
})
export class FormTaskComponent implements OnInit {
  // Practicing Component
  taskForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.taskForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl("critical")
    });
  }

  onSubmit() {
    console.log(this.taskForm.value);
  }
}
