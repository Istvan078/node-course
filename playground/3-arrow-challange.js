const tasks = {
    tasks: [
        {
            text: "Bevásárlás",
            completed: true
        },
        {
            text: "Udvar takarítás",
            completed: false
        },
        {
            text: "Filmezni a tanfolyamat",
            completed:false
        },
    ],
    getTasksToDo() {
    return  this.tasks.filter((task) => task.completed === false
        )
        
    }
}




console.log(tasks.getTasksToDo())