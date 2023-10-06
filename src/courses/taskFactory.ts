import { withNotificationDecorator } from './decorator';
import { taskInProgress, taskToDo } from './task';

interface TaskFactory {
  createTask(taskname: string, withNotification?: boolean);
}

class FactoryTaskToDo implements TaskFactory {
  createTask(taskname: string, withNotification: boolean, status?: string) {
    console.log('crea todo');
    const task = new taskToDo(taskname, 'To Do');
    if (withNotification) {
      return new withNotificationDecorator(task);
    }
    return task;
  }
}

class FactoryTaskInProgess implements TaskFactory {
  createTask(taskname: string) {
    console.log('crea in progress');
    return new taskInProgress(taskname, 'In Progess');
  }
}

export class Factory {
  private factories = {};

  constructor() {
    this.factories['ToDo'] = new FactoryTaskToDo();
    this.factories['InProgess'] = new FactoryTaskInProgess();
  }

  public createTask(status: string, taskname: string, withNotification?: boolean) {
    return this.factories[status].createTask(taskname, withNotification);
  }
}
