// ==================================================================================================================================================
// 6 заданий по DOM

//Task # 1

// const tasks = document.querySelector('#tasks');
// const formContainer = document.createElement('div');
// formContainer.innerHTML = `<form class="create-user-form">
// <label>
// Имя
// <input type="text" name="userName" placeholder="Введите ваше
// имя">
// </label>
// <label>
// Пароль
// <input type="password" name="password" placeholder="Придумайте
// Пароль">
// </label>
// <button type="submit">
// Подтвердить
// </button>
// </form>`

// tasks.append(formContainer);

// const createForm = (container) => {
//     const userForm = document.createElement('form');
//     userForm.className = 'create-user-form';

//     const labelUserName = document.createElement('label');
//     labelUserName.textContent = 'Имя';

//     const inputUserName = document.createElement('input');
//     inputUserName.type = 'text';
//     inputUserName.name = 'userName';
//     inputUserName.placeholder = 'Введите ваше имя';

//     labelUserName.append(inputUserName)

//     const labelPassword = document.createElement('label');
//     labelPassword.textContent = 'Пароль';

//     const inputPassword = document.createElement('input');
//     inputPassword.type = 'password';
//     inputPassword.name = 'password';
//     inputPassword.placeholder = 'Придумайте Пароль';

//     labelPassword.append(inputPassword);

//     const submitFormButton = document.createElement('button');
//     submitFormButton.type = 'submit';
//     submitFormButton.textContent = 'Подтвердить';

//     userForm.append(labelUserName, labelPassword, submitFormButton)
//     container.append(userForm);
// }
// createForm(tasks)


// ==================================================================================================================================================
//Task # 2

const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox-form__checkbox';
    const inputId = `task-${taskId}`;
    inputCheckbox.id = inputId;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = inputId;

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.innerText = 'Удалить';

    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);

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

const renderErrorBlock = (text) => {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message-block';
    errorSpan.textContent = text;

    return errorSpan;
}

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskText = (event.target.taskName.value || '').trim();
    const isTaskExists = tasks.some((task) => task.text === newTaskText);
    const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block');

    if (!newTaskText) {
        const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
        createTaskForm.append(errorBlock);
    } else if (isTaskExists) {
        const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
        createTaskForm.append(errorBlock); 
    } else if (newTaskText && !isTaskExists) {
        const newTask = {
            id: Date.now().toString(),
            text: newTaskText,
        };
        tasks.push(newTask);
        const taskItem = createTaskItem(newTask.id, newTask.text);
        tasksListContainer.append(taskItem);
    }
    if (errorMessageBlockFromDOM) {
        errorMessageBlockFromDOM.remove();
    }
});

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});

const createDeleteModal = (text) => {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay modal-overlay_hidden';

    const deleteModal = document.createElement('div');
    deleteModal.className = 'delete-modal';

    modalOverlay.append(deleteModal);

    const modalTitle = document.createElement('h3');
    modalTitle.className = 'delete-modal__question';
    modalTitle.innerText = text;
    const modalButtons = document.createElement('div');
    modalButtons.className = 'delete-modal__buttons';
    
    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
    cancelButton.innerText = 'Отмена'
    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.innerText = 'Удалить';

    deleteModal.append(modalTitle, modalButtons); 
    modalButtons.append(cancelButton, confirmButton);

    return {
        cancelButton,
        confirmButton,
        modalOverlay,
    };
}

let targetTaskIdToDelete = null;

const {
    cancelButton, confirmButton, modalOverlay
} = createDeleteModal('Вы действительно хотите удалить эту задачу?');
document.body.prepend(modalOverlay); // остановился на этом моменте

const tasksList = document.querySelector('.tasks-list');



tasksList.addEventListener('click', (event) => {
   const { target } = event;
   const deleteButton = target.closest('.task-item__delete-button');

   if(deleteButton) {
        const taskItem = deleteButton.closest('.task-item');
        if(taskItem) {
            const taskId = taskItem.dataset.taskId
            targetTaskIdToDelete = taskId;
            modalOverlay.classList.remove('modal-overlay_hidden');
        }
   }
})