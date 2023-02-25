// инпут для ввода задач, 3 столбика:
// 1 - список задач
// 2 - 2 задачи, которые делаю сегодня
// 3 - выполненные задачи
import {createModel} from './task - model.js';
import {createView} from './task-view.js';

const mainElement = document.querySelector('.main');
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const taskModel = createModel();

const addTaskButtonHandler = () => {
    const {value: newTaskTitle} = newTaskElement;
  
    if (newTaskTitle.trim() === '') {
      return;
    }
  
    taskModel.add(newTaskTitle);
    render(taskModel.getItems());
    newTaskElement.value = '';
    newTaskElement.focus();
};

const render = (tasks) => {
    const newFragment = document.createDocumentFragment();
    tasksListElement.innerHTML = '';

    tasks.forEach((task) => {
        const newTaskView = createView();
        const newElement = newTaskView.getElement(task);

        newTaskView.bindListeners(({target}) => {
            taskModel.complete(Number(target.id));
            newTaskView.removeElement();
            render(taskModel.getItems());
        })

        newFragment.append(newElement)
    })

    tasksListElement.appendChild(newFragment);
};

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);

render(taskModel.getItems());