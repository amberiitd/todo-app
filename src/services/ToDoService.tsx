import { emit } from "node:process";

export class ToDoService{
    private dateFormatOptions : any= { 
        weekday: "long", 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    private tasks: any[]=[
        {
            title: "Get Sodexo Card",
            descr: "It is just a simple description. Maybe a second line with more to say about it.",
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: "Sept 5, 2021",
        },
        {
            title: "Sumbit Tax Declaration",
            descr: "Declare new regime as tax regime and also declare PPF account and house rent in tax deduction area.",
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: "Apr 25, 2021",
        },
        {
            title: "Finish Oval Testing",
            descr: "Make sure all the existing test codes has been migrated to new framework. Check for any untested tasks in the project",
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: "Dec 21, 2021",
        },
    ];

    public addTask(task: any): void{
        this.tasks.push(task);

    }

    public notify(): void{
    }

}