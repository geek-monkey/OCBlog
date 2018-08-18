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
      apiKey: "AIzaSyBagwl9gcjhRBYe5vpkNzdAHCLe1ZOd6lU",
      authDomain: "oc-blog-activity.firebaseapp.com",
      databaseURL: "https://oc-blog-activity.firebaseio.com",
      projectId: "oc-blog-activity",
      storageBucket: "",
      messagingSenderId: "1080771094145"
    };
    firebase.initializeApp(config);
  }

}
