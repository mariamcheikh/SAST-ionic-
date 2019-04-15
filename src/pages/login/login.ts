import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ProfilPage } from '../profil/profil';
import { ProfilfbPage } from '../profilfb/profilfb';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 responseData : any;
 userData = {"username": "","password": ""};
  constructor(public navCtrl: NavController, public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  forgotemail(){
   
      this.navCtrl.setRoot(ContactPage);
      
  }
  loginWithFB() {
    this.navCtrl.setRoot(ProfilfbPage);
    

   
  }
  login(){
    this.authService.postData(this.userData,'login').then((result) => {
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
}
