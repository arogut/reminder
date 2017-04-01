import {NgModule, ErrorHandler} from "@angular/core";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {Home} from "../pages/home/home";
import {Reminders} from "../pages/reminders/reminders";
import {RemindersAdd} from "../pages/reminders-add/reminders-add";
import {Storage} from "@ionic/storage"
import {DiaryAdd} from "../pages/diary-add/diary-add";
import {Diary} from "../pages/diary/diary";
import {DiaryDetails} from "../pages/diary-details/diary-details";

@NgModule({
  declarations: [
    MyApp,
    Home,
    Reminders,
    RemindersAdd,
    Diary,
    DiaryAdd,
    DiaryDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Reminders,
    RemindersAdd,
    Diary,
    DiaryAdd,
    DiaryDetails
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {
}
