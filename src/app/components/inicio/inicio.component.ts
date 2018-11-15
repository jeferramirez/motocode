import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  registro = {
    marca: '',
    modelo: '',
    noLicencia: '',
    noPlaca: '',
    noChasis: '',
    noMotor: '',
    tipo: '',
    ingreso: false
  };

  id = '';

  constructor(private activatedRouter: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {

    this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      this.estructurarFirebase(this.id).subscribe(doc => {
        const aux = doc.payload.data();
        this.registro.marca = aux['marca'];
        this.registro.modelo = aux['modelo'];
        this.registro.noLicencia = aux['noLicencia'];
        this.registro.noPlaca = aux['noPlaca'];
        this.registro.noChasis = aux['noChasis'];
        this.registro.noMotor = aux['noMotor'];
        this.registro.tipo = aux['tipo'];
        this.registro.ingreso = aux['ingreso'];

      });
      console.log(this.id);
    });
  }

  changeStatus(val: boolean) {
    this.afs.collection('qr-code').doc(this.id).set({ ingreso: val }, { merge: true });
    this.registro.ingreso = val;


    this.afs.collection('qr-code').doc('contador').ref.get().then(doc => {
      const cont = doc.data();
      if (this.registro.tipo === 'moto') {
        if (val) {
          cont.motos ++;
        } else {
          cont.motos --;
        }

      } else {
        if (val) {
          cont.carros ++;
        } else {
          cont.carros --;
        }

      }

      this.afs.collection('qr-code').doc('contador').update(cont);

    });

    console.log(val);
  }


  estructurarFirebase(id) {
    return this.afs.collection('qr-code').doc(id).snapshotChanges();
  }

}
