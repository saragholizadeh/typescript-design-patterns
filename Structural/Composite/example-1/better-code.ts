interface TaskComponent {
    getTotal(): number
    getDone(): number
}

class SimpleTaskService implements TaskComponent {
    constructor(public name: string, public done: boolean) {}
    getTotal() { return 1 }
    getDone() { return this.done ? 1 : 0 }
}

class MilestoneService implements TaskComponent {
    tasks: TaskComponent[] = []
    add(t: TaskComponent) { this.tasks.push(t) }
    getTotal() { return this.tasks.reduce((sum, t) => sum + t.getTotal(), 0) }
    getDone() { return this.tasks.reduce((sum, t) => sum + t.getDone(), 0) }
}

// Usage

const task1 = new SimpleTaskService("Design UI", true);
const task2 = new SimpleTaskService("Setup DB", false);
const task3 = new SimpleTaskService("Write Tests", true);

const milestone = new MilestoneService();
milestone.add(task1); milestone.add(task2);

const milestone2 = new MilestoneService();
milestone2.add(milestone); milestone2.add(task3);

console.log("Total:", milestone2.getTotal(), "Done:", milestone2.getDone()); // Total: 3 Done: 2