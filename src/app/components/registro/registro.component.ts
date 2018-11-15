import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic/generic.service';
import { AngularFirestore  } from '@angular/fire/firestore';
import * as QRCode from 'qrcode';
import swal from 'sweetalert2';

// tslint:disable-next-line:import-spacing
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  QRimage;
  QrCantidad;
  base64;
  zip = new JSZip();
  img;
  registro = {
    marca : '',
    modelo : '',
    noLicencia : '',
    noPlaca: '',
    noChasis: '',
    noMotor: '',
    tipo: '',
    ingreso: false
  };

  constructor(public afs: AngularFirestore ) { }

  ngOnInit() {
  }


  addNewCode() {

    console.log('entro');

    console.log(this.registro);


    this.afs.collection('qr-code').add( this.registro).then( data => {

      console.log('se agrego' , data.id);

      swal({
        type: 'success',
        title: 'Registro almacenado correctamente',
        showConfirmButton: true
      });
      this.genQr(data.id);
    } );




  }


  genQr(id) {
    const urlQR = `${window.location.origin}/get-code/${id}`;

     this.img = this.zip.folder('images');
      QRCode.toDataURL(urlQR, { errorCorrectionLevel: 'M' })
        .then(url => {
          this.QRimage = url;
          this.base64 = this.QRimage.split(',')[1];


          const image = this.img.file('qrcode' + id + '.png', this.base64, { base64: true });
          console.log('image content', image);



            this.zip.generateAsync({ type: 'blob' }).then((content) => {
              // see FileSaver.js

              console.log('este es el content', content);
              saveAs(content, 'qrcodes.zip');
            });



          console.log(url);
        });

  }

  tipo( type ) {
    this.registro.tipo = type;
  }

}
