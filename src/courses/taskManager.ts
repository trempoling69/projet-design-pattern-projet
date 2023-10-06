import { developper } from './developper';
import { Task } from './task';
import { Factory } from './taskFactory';

let f = new Factory();

class taskManager {
  tasks: Task[];
  developpers: developper[];
  constructor() {
    this.tasks = [];
    this.developpers = [];
  }

  modifyTask(task: Task) {
    console.log('modification');
  }
  deleteTask(task: Task) {
    console.log('suppression');
  }
  createTask(status: string, taskname: string, notification?: boolean) {
    const task = f.createTask(status, taskname, notification);
    this.tasks.push(task);
    this.notifyCreateTask(task);
  }
  addDevelopper(developper: developper) {
    this.developpers.push(developper);
  }
  notifyCreateTask(task: Task) {
    this.developpers.forEach((developper) => developper.notify('New task pour ' + task.getName()));
  }
  getTask() {
    return this.tasks;
  }
}

export const taskManagerInstance = new taskManager();
