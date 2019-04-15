import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CallcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-callcontact',
  templateUrl: 'callcontact.html',
})
export class CallcontactPage {

  subject ='';
  body ='';
  to ='';
  name = '';
  phone='';

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer:EmailComposer
  ) {
  }
  send(){
    let email= {
    to: 'mariam.cheikh@esprit.tn',
    cc:[],
    bcc: [],
    attachement:[],
    subject:this.subject,
    body: this.body+'   Sent by '+ this.name +''+ this.phone,
    isHtml: false,
    app:"Gmail"
   }
    this.emailComposer.open(email);

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallcontactPage');
  }

  

}
