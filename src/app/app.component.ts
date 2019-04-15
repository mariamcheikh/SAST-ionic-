import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { timer } from 'rxjs/observable/timer';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { ContactPage } from '../pages/contact/contact';

import { ProfilPage } from '../pages/profil/profil';
import { TabscontactPage } from '../pages/tabscontact/tabscontact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:string = 'SliderPage';

  pages: Array<{title: string, component: any}>;
  showSplash = true; // <-- show animation

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: HomePage },
      { title: 'الدورات', component: ListPage },
      { title: 'إتصل بنا', component: TabscontactPage },
      { title:'حسابي', component: ProfilPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
