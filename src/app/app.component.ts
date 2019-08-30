import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCjpuX2maM-eCxztDdE2F28NYp6sSBIRp4",
      authDomain: "bookshelves-oc-980dd.firebaseapp.com",
      databaseURL: "https://bookshelves-oc-980dd.firebaseio.com",
      projectId: "bookshelves-oc-980dd",
      storageBucket: "gs://bookshelves-oc-980dd.appspot.com/",
      messagingSenderId: "109935920454",
      appId: "1:109935920454:web:aaf6c8d6a334c210"
    };
    firebase.initializeApp(config);
  }
}
