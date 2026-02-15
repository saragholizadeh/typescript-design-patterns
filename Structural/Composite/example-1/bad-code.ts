class SimpleTask {
    constructor(public name: string, public done: boolean) {}
}

class Milestone {
    tasks: (SimpleTask | Milestone)[] = []
    add(t: SimpleTask | Milestone) { this.tasks.push(t) }
}

// create tasks and milestones


const t1 = new SimpleTask("Design UI", true);
const t2 = new SimpleTask("Setup DB", false);
const t3 = new SimpleTask("Write Tests", true);

const m1 = new Milestone();
m1.add(t1); m1.add(t2);

const m2 = new Milestone();
m2.add(m1); m2.add(t3);

// Function to count total and done tasks in a milestone
function countTasks(milestone: Milestone): { total: number, done: number } {
    let total = 0, done = 0;
    for (const t of milestone.tasks) {
        if (t instanceof SimpleTask) {
            total++;
            if (t.done) done++;
        } else if (t instanceof Milestone) {
            const sub = countTasks(t);
            total += sub.total;
            done += sub.done;
        }
    }
    return { total, done };
}

// Usage
const result = countTasks(m2);
console.log("Total:", result.total, "Done:", result.done); // Total: 3 Done: 2


/*
PROBLEMS:
1. We have to check the type of each task to determine if it's a SimpleTask or a Milestone.
2. The counting logic is spread across the client code, making it less reusable and harder to maintain.
3. Violating the Open/Closed Principle. (Adding new types of tasks would require modifying the counting logic)
4. Tightly coupled to the specific implementations of tasks and milestones
*/