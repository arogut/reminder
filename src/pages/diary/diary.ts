import {Component} from '@angular/core';
import {NavController, Events, ModalController} from 'ionic-angular';
import {Measurement} from "../../domain/measurement";
import {DiaryAdd} from "../diary-add/diary-add";
import {Storage} from "@ionic/storage"
import {DiaryDetails} from "../diary-details/diary-details";

@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class Diary {

  public measurements: Array<Measurement>;

  constructor(public navCtrl: NavController, public events: Events, private storage: Storage, public modalCtrl: ModalController) {
    this.getMeasurements();

    this.events.subscribe('reload-diary',() => {
      this.getMeasurements();
    });
  }

  addNewMeasurement() {
    this.navCtrl.push(DiaryAdd);
  }

  presentModal(measurement: Measurement) {
    let modal = this.modalCtrl.create(DiaryDetails, measurement);

    modal.present();
  }

  getMeasurements() {
    this.storage.get("measurements").then((values) => {
      console.log(values);
      this.measurements = JSON.parse(values);
    })
  }

}
