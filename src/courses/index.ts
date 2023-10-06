import { developper } from './developper';
import { taskManagerInstance } from './taskManager';

const developpers: developper[] = [
  new developper('joris', 'deLaCroix'),
  new developper('emmanuel', 'macaron'),
  new developper('jean', 'duPréo'),
];

developpers.forEach((developper) => {
  taskManagerInstance.addDevelopper(developper);
  developper.login();
});

taskManagerInstance.createTask('ToDo', 'correction de bug', true);
taskManagerInstance.createTask('InProgess', 'mise à jour');
// taskManagerInstance.notifyCreateTask();
console.log(taskManagerInstance.getTask());
