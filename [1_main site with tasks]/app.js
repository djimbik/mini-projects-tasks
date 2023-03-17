// инпут для ввода задач, 3 столбика:
// 1 - список задач
// 2 - 2 задачи, которые делаю сегодня
// 3 - выполненные задачи
import TaskModel from './task - model.js';
import TaskPresenter from './task-presenter.js';

const mainElement = document.querySelector('.main');
const mainContainer = mainElement.querySelector('.container')
const newTaskElement = mainElement.querySelector('.new-task');
const addTaskButtonElement = mainElement.querySelector('.add-task-button');
const tasksListElement = mainElement.querySelector('.tasks');

const taskModel = new TaskModel([
    {
        id: Date.now(),
        title: 'Objects: Задание #1, Повторов: 1',
        isDone: true,
    },
    {
        id: Date.now() + 1,
        title: `Objects: Задание #2, Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 2,
        title: `Objects: Задание #3, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 3,
        title: `Objects: Задание #4, Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 4,
        title: `Objects: Задание #5 (дополнительное), Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 5,
        title: `Objects: Задание #6 (дополнительное), Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 6,
        title: `Objects: Задание #7 (дополнительное), Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 7,
        title: `Objects: Задание #8 (дополнительное), Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 12,
        title: `Date: Задание #1, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 13,
        title: `Date: Задание #2, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 14,
        title: `Date: Задание #3, Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 15,
        title: `Date: Задание #4 (дополнительное), Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 16,
        title: 'Classes and OOP: Задание #1, Повторов: 1',
        isDone: true,
    },
    {
        id: Date.now() + 17,
        title: `Classes and OOP: Задание #2, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 18,
        title: `Classes and OOP: Задание #3, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 19,
        title: `Classes and OOP: Задание #4, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 20,
        title: `Classes and OOP: Задание #5, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 21,
        title: `Classes and OOP: Задание #6 (дополнительное), Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 22,
        title: `Classes and OOP: Задание #7 (дополнительное), Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 23,
        title: 'DOM: Задание #1, Повторов: 2',
        isDone: true,
    },
    {
        id: Date.now() + 24,
        title: `DOM: Задание #2, Повторов: 2`,
        isDone: true,
    },
    {
        id: Date.now() + 25,
        title: `DOM: Задание #3, Повторов: 2`,
        isDone: true,
    },
    {
        id: Date.now() + 26,
        title: `DOM: Задание #4, Повторов: 2`,
        isDone: true,
    },
    {
        id: Date.now() + 27,
        title: `DOM: Задание #5, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 28,
        title: `DOM: Задание #6, Повторов: 1`,
        isDone: true,
    },
    {
        id: Date.now() + 29,
        title: `DOM: Задание #7 (дополнительное), Повторов: 0`,
        isDone: false,
    },
    {
        id: Date.now() + 27,
        title: `Асинхронность (Promise + Fetch): Задание #1, Повторов: 1`,
        isDone: true, 
    },
    {
        id: Date.now() + 28,
        title: `Асинхронность (Promise + Fetch): Задание #2, Повторов: 1`,
        isDone: true, 
    },
    {
        id: Date.now() + 29,
        title: `Асинхронность (Promise + Fetch): Задание #3, Повторов: 0`,
        isDone: false, 
    },
    {
        id: Date.now() + 30,
        title: `Асинхронность (Promise + Fetch): Задание #4 (дополнительное), Повторов: 0`,
        isDone: false, 
    },
    {
        id: Date.now() + 31,
        title: `Асинхронность (Async Await): Задание #1, Повторов: 0`,
        isDone: false, 
    },
    {
        id: Date.now() + 32,
        title: `Асинхронность (Async Await): Задание #2, Повторов: 1`,
        isDone: true, 
    },
    {
        id: Date.now() + 33,
        title: `Асинхронность (Async Await): Задание #3, Повторов: 0`,
        isDone: false, 
    },
    {
        id: Date.now() + 34,
        title: `Callback + Event Loop: Задание #1, Повторов: 1`,
        isDone: true, 
    },
    {
        id: Date.now() + 35,
        title: `Callback + Event Loop: Задание #2, Повторов: 0`,
        isDone: false, 
    },
    {
        id: Date.now() + 36,
        title: `Callback + Event Loop: Задание #3, Повторов: 0`,
        isDone: false, 
    },

]);
console.log(taskModel)
  
const taskPresenter = new TaskPresenter(tasksListElement, taskModel);

const addTaskButtonHandler = () => {
    const {value: newTaskTitle} = newTaskElement;
  
    newTaskElement.value = '';
    newTaskElement.focus();
    taskPresenter.addTask(newTaskTitle);
};

addTaskButtonElement.addEventListener('click', addTaskButtonHandler);

taskPresenter.render();

const renderChoiceBlock = () => {
    const randomButton = document.createElement('button');
    randomButton.className = 'add-task-button button blue';
    randomButton.textContent = 'Крути!';

    const output = document.createElement('div');

    randomButton.addEventListener('click', () => {
        output.textContent = Math.floor(Math.random() * taskModel._tasks.length) + 1;
    })

    mainContainer.append(randomButton);
    mainContainer.append(output);
}

renderChoiceBlock()


