import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/button/button.component';
import { TableComponent } from "./shared/table/table.component";
import { CommonModule } from '@angular/common';
import { FormComponent } from './shared/form/form.component';
import { Creditur } from './shared/interface/creditur';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TableComponent, CommonModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  label = 'Submit dari parent';

  nama = "Andi";
  umur = 20;
  laptop = "Asus";
  pekerjaan = "Programmer";
  DP = 2500000;
  hargaMotor = 15000000;
  penghasilanPerBulan = 3000000;

  parentUser: Creditur[] = [{
    nama: "Andi",
    umur: 20,
    pekerjaan: "Programmer",
    DP: 2500000,
    hargaMotor: 15000000,
    penghasilanPerBulan: 3000000
  },
  {
    nama: "Budi",
    umur: 22,
    pekerjaan: "Designer",
    DP: 3000000,
    hargaMotor: 18000000,
    penghasilanPerBulan: 3500000
  },
  {
    nama: "Charlie",
    umur: 23,
    pekerjaan: "Tester",
    DP: 2800000,
    hargaMotor: 17000000,
    penghasilanPerBulan: 3200000
  }
];

newUser = {
  nama: '',
  umur: null,
  pekerjaan: '',
  DP: null,
  hargaMotor: null,
  penghasilanPerBulan: null
};

penampungFilter: Creditur[] = [];

ngOnInit(): void {
    this.filterData();
  }

filterData(){
  this.penampungFilter = this.parentUser.filter(user => user.umur > 21 && user.umur < 55 && user.penghasilanPerBulan > 3000000);
}


onFormSubmitted(data: Creditur) {
  this.parentUser.push(data);
  this.filterData();
  console.log(this.parentUser);
}



  penampunganDataChildButton: string = '';
  namaChild: string = '';
  onChildClicked(event: string) {
    this.penampunganDataChildButton = event;
  }
}     
