import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabslogPage } from '../tabslog/tabslog';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {



    if(localStorage.getItem('userData')){
      this.navCtrl.setRoot(ProfilPage);
    }
  }

  login(){
    this.navCtrl.setRoot(TabslogPage);
    }

}
