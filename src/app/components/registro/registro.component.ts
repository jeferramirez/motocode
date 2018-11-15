import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic/generic.service';
import { AngularFirestore  } from '@angular/fire/firestore';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro = {
    marca : '',
    modelo : '',
    noLicencia : '',
    noPlaca: '',
    noChasis: '',
    noMotor: '',
    tipo: ''
  };

  constructor(public afs: AngularFirestore ) { }

  ngOnInit() {
  }


  addNewCode() {

    console.log('entro');

    console.log(this.registro);


    this.afs.collection('qr-code').add( this.registro).then( data => {

      console.log('se agrego' , data.id);
    } );




  }


  genQr() {

  }

  tipo( type ) {
    this.registro.tipo = type;
  }

}
