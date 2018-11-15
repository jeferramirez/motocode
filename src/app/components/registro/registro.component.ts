import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic/generic.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(  private _servicePark: GenericService ) { }

  ngOnInit() {
  }


  addNewCode() {

  }

}
