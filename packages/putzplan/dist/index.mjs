class Putzplan {
  constructor() {
    this.addTask = (task) => {
      this._tasks.push(task);
    };
    this.addMate = (mate) => {
      this._mates.push(mate);
    };
  }
}

class Mate {
}

class Task {
}

export { Mate, Putzplan, Task };
