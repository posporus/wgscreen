import { Mate } from './Mate';
import { Task } from './Task';

export class Putzplan {
    private _tasks:Task[]
    private _mates:Mate[]

    addTask = (task:Task) => {
        this._tasks.push(task)
    }
    addMate = (mate:Mate) => {
        this._mates.push(mate)
    }
    
}