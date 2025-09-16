import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Creditur } from '../interface/creditur';

@Component({
  selector: 'shared-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;
  @Output() formSubmitted = new EventEmitter<Creditur>();

  constructor() {
    this.form = new FormGroup({
      nama: new FormControl('', [Validators.required]),
      umur: new FormControl('', [Validators.required, Validators.min(21), Validators.max(55)]),
      pekerjaan: new FormControl('', [Validators.required]),
      DP: new FormControl('', [Validators.required, Validators.min(1000000)]),
      hargaMotor: new FormControl('', [Validators.required, Validators.min(5000000)]),
      penghasilanPerBulan: new FormControl('', [Validators.required, Validators.min(2000000)])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit({
        nama: this.form.value.nama,
        umur: this.form.value.umur,
        pekerjaan: this.form.value.pekerjaan,
        DP: this.form.value.DP,
        hargaMotor: this.form.value.hargaMotor,
        penghasilanPerBulan: this.form.value.penghasilanPerBulan
      });
    }
  }
}
