import { Task, TaskClass } from './task';

export class withNotificationDecorator extends TaskClass {
  protected task: Task;
  taskname: string;
  status: string;
  constructor(task: Task) {
    super(task.taskname, task.status);
  }
  public setNotification() {
    return (this.task.notification = true);
  }
}
