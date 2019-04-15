import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider ) {
  }

  signup(){
    this.authService.postData(this.userData,'signup').then((result) => {
     this.responseData = result;
     if(this.responseData.userData){
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     this.navCtrl.setRoot(ProfilPage);
     }
     else{ console.log("error"); }
   }, (err) => {
     // Error log
   });

 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    
  }
}
