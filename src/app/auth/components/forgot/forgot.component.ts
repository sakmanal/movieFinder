import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgotpassService } from '../../services/forgotpass.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  resetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private forgotpassService: ForgotpassService
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  private createForm() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }

    this.forgotpassService.recoveryMail(this.resetForm.controls.email.value)
      .subscribe(
        responce => this.toastr.success(responce.message),
        error => this.toastr.error(error)
      );
  }

}
