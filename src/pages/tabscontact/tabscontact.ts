import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatacontactPage } from '../datacontact/datacontact';
import { CallcontactPage } from '../callcontact/callcontact';

/**
 * Generated class for the TabscontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabscontact',
  templateUrl: 'tabscontact.html',
})
export class TabscontactPage {
  tab1Root = DatacontactPage;
  tab2Root = CallcontactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabscontactPage');
  }

}
