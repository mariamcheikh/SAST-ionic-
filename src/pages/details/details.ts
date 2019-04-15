import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfocoursePage } from '../infocourse/infocourse';
import { CurriculumPage } from '../curriculum/curriculum';
import { ForumPage } from '../forum/forum';
import { ExamsPage } from '../exams/exams';
import { CoachPage } from '../coach/coach';
import { RatePage } from '../rate/rate';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  tab1Root = InfocoursePage;
  tab2Root = CurriculumPage;
  tab3Root = ForumPage;
  tab4Root = ExamsPage;
  tab5Root = CoachPage;
  tab6Root = RatePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
