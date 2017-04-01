export class Reminder {
  id: number;
  name: string;
  type: string;
  message: string;

  constructor(id: number, name: string, type: string, message: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.message = message;
  }
}
