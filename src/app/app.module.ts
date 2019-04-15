import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilfbPage } from '../pages/profilfb/profilfb';
import { TabslogPage } from '../pages/tabslog/tabslog';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatacontactPage } from '../pages/datacontact/datacontact';
import { CallcontactPage } from '../pages/callcontact/callcontact';
import { TabscontactPage } from '../pages/tabscontact/tabscontact';


import { Facebook } from '@ionic-native/facebook';
import { EmailComposer } from '@ionic-native/email-composer';



import { DetailsPage } from '../pages/details/details';
import { InfocoursePage } from '../pages/infocourse/infocourse';
import { CurriculumPage } from '../pages/curriculum/curriculum';
import { ForumPage } from '../pages/forum/forum';
import { ExamsPage } from '../pages/exams/exams';
import { CoachPage } from '../pages/coach/coach';
import { RatePage } from '../pages/rate/rate';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    ProfilPage,
    TabslogPage,
    DatacontactPage,
    CallcontactPage,
    TabscontactPage,
    DetailsPage,
   InfocoursePage,
    CurriculumPage,
     ForumPage,
    ExamsPage,
     CoachPage,
    RatePage,
    ProfilfbPage

    //SliderPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    ProfilPage,
    TabslogPage,
    DatacontactPage,
    CallcontactPage,
    DatacontactPage,
    TabscontactPage,
      DetailsPage,
   InfocoursePage,
    CurriculumPage,
     ForumPage,
    ExamsPage,
     CoachPage,
    RatePage,
    ProfilfbPage
   // SliderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AuthServiceProvider,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    
  ]
})
export class AppModule {}
