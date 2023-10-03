export interface Task {
  taskname: string;
  status: string;
  notification?: boolean;
  getName(): string;
  getStatus(): string;
  setNotification?: (value: boolean) => void;
}

export abstract class TaskClass implements Task {
  taskname: string;
  status: string;
  notification?: boolean;
  constructor(taskname: string, status: string) {
    this.taskname = taskname;
    this.status = status;
  }

  getName(): string {
    return this.taskname;
  }
  getStatus(): string {
    return this.status;
  }
  setNotification(value: boolean) {
    this.notification = value;
  }
}

export class taskToDo extends TaskClass {
  taskname: string;
  status: string;
  constructor(taskname: string, status: string) {
    super(taskname, status);
  }
}

export class taskInProgress extends TaskClass {
  taskname: string;
  status: string;
  constructor(taskname: string, status: string) {
    super(taskname, status);
  }
}

export class taskFinsih extends TaskClass {
  taskname: string;
  status: string;
  constructor(taskname: string, status: string) {
    super(taskname, status);
  }
}
