import {Component} from "@angular/core";
import {NavController, Events} from "ionic-angular";
import {Measurement} from "../../domain/measurement";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-diary-add',
  templateUrl: 'diary-add.html'
})
export class DiaryAdd {

  measurement: Measurement = new Measurement("", new Date(), 0, 0, 0, "heart");
  isAcceptable = true;

  constructor(public navCtrl: NavController, public events: Events, private storage: Storage) {
  }

  addMeasurementToDiary() {
    this.add();
    this.navCtrl.pop();
  }

  public add() {
    this.storage.get("measurements").then((values) => {
      let arr: Array<Measurement> = JSON.parse(values);
      this.measurement.id = new Date().toISOString();
      this.measurement.img = this.isAcceptable ? "heart" : "heart-outline";
      console.log(this.measurement.id);
      arr.push(this.measurement);
      this.storage.set("measurements", JSON.stringify(arr)).then(() => {
        console.log("Inserted successfully")
      });
      this.events.publish('reload-diary');
    });
  }

}
