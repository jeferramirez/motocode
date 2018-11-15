import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carros = 0;
  motos = 0;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.afs.collection('qr-code').doc('contador').snapshotChanges().subscribe(doc => {
      this.carros = doc.payload.data()['carros'];
      this.motos = doc.payload.data()['motos'];
    });

  }

}
