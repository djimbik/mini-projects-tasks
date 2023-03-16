//========================================================================================================
// second task DOM

const tasksList = document.querySelector('.tasks-list');

const createTaskItem = (id, text) => {
    const taskItem = document.createElement('div');
    taskItem.className = `task-item`
    taskItem.dataset.taskId = id

    const taskItemContainer = document.createElement('div');
    taskItemContainer.className = 'task-item__main-container';

    const taskItemContent = document.createElement('div');
    taskItemContent.className = 'task-item__main-content';

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = 'checkbox-form__checkbox';
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = `task-${id}`;

    const labelTask1 = document.createElement('label');
    labelTask1.htmlFor = `task-${id}`;

    checkboxForm.append(inputCheckbox, labelTask1);

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.textContent = text;

    taskItemContent.append(checkboxForm, taskItemText);

    const taskItemDeleteButton = document.createElement('button');
    taskItemDeleteButton.className = 'task-item__delete-button default-button delete-button';
    taskItemDeleteButton.dataset.deleteTaskId = '5';
    taskItemDeleteButton.textContent = 'Удалить';

    taskItemContainer.append(taskItemContent, taskItemDeleteButton);
    taskItem.append(taskItemContainer);


    return taskItem;
}

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

tasks.forEach(task => {
    const taskHTML = createTaskItem(task.id, task.text)
    tasksList.append(taskHTML)
})


//========================================================================================================
// third task DOM

const createTaskBlock = document.querySelector('.create-task-block');
createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;

    const newTaskText = (target.taskName.value || '').trim();
    const isTaskExists = tasks.filter(task => task.text === newTaskText.trim()).length;

    const isExistErrorBlock = document.querySelector('.error-message-block');
    if (isExistErrorBlock) {
        isExistErrorBlock.remove();
    }

    const errorBlock = document.createElement('span');
    errorBlock.className = 'error-message-block';

    if(!newTaskText) {
        errorBlock.textContent = 'Название задачи не должно быть пустым';
        createTaskBlock.append(errorBlock);
    } else if (isTaskExists) {
        errorBlock.textContent = 'Задача с таким названием уже существует.';
        createTaskBlock.append(errorBlock);
    } else if (newTaskText && !isTaskExists) {
        const newTask = {
            id: Date.now().toString(),
            completed: false,
            text: newTaskText,
        }
        tasks.push(newTask);
        tasksList.append(createTaskItem(newTask.id, newTask.text));
    }
})






















































