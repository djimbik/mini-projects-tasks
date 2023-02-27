
const TaskModel = function (initialTasks = []) {
    this._tasks = [...initialTasks];
};

TaskModel.prototype.add = function (title) {
    this._tasks.push({
      id: Date.now(),
      title,
      isDone: false,
    });
};

TaskModel.prototype.complete = function (id) {
    const existTask = this._tasks.find((task) => task.id == id);
    existTask.isDone = !existTask.isDone;
};

TaskModel.prototype.getItems = function () {
    return this._tasks;
};

export default TaskModel;