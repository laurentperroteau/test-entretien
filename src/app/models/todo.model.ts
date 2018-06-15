export class Todo {
  name: string;
  label: string;
  done = false;

  constructor(rawobj) {
    Object.assign(this, rawobj);
  }
}
