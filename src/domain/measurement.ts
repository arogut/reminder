export class Measurement {
  id: string;
  date: Date;
  diastolic: number;
  systolic: number;
  pulse: number;
  img: string;

  constructor(id: string, date: Date, diastolic: number, systolic: number, pulse: number, img: string) {
    this.id = id;
    this.date = date;
    this.diastolic = diastolic;
    this.systolic = systolic;
    this.pulse = pulse;
    this.img = img;
  }
}
