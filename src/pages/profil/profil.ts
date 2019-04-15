
import { Component } from '@angular/core';
import {  NavController,App } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  rootPage:any = HomePage; 
  userDetails : any;


  constructor(public navCtrl: NavController, public app:App) {
  const data = JSON.parse(localStorage.getItem('userData'));
  this.userDetails = data.userData;


}


  // or WelcomePage or else...

  backToWelcome(){

    this.navCtrl.setRoot(this.rootPage);
  }
/*
backToWelcome(){

   // const root = this.app.getRootNavs()[5]
     //root.popToRoot();
}*/

logout(){
     localStorage.clear();
     setTimeout(() => this.backToWelcome(), 2000);
}

}
