

export const createModel = () => {
    let tasks = [
        {
          id: Date.now(),
          title: 'Вынести мусор',
          isDone: false,
        },
        {
          id: Date.now() + 1,
          title: 'Защитить интенсив на соточку',
          isDone: true,
        },
    ]; 

    const add = (title) => {
        tasks.push({
            id: Date.now(),
            title,
            isDone: false,
        })
    }

    const complete = (id) => {
        const existTask = tasks.find((task) => task.id === id);
        existTask.isDone = !existTask.isDone;
    }

    const getItems = () => tasks;

    return {
        add,
        complete,
        getItems
    }
}