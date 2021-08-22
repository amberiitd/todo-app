import Component from 'react';
import {isEmpty} from 'lodash';
import ToDo from '../ToDo/ToDo';
import AddToDo from '../AddToDo/AddToDo';
import React from 'react';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

export interface ToDoBoardProps{
    
}

interface ToDoBoardState{
    tasks: any[];
}


class ToDoBoard extends React.Component<ToDoBoardProps, ToDoBoardState>{
    dateFormatOptions : any= { 
        weekday: "long", 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    tasks: any[]=[
        {
            id: 1,
            title: "Get Sodexo Card",
            descr: "It is just a simple description. Maybe a second line with more to say about it.",
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: "Sept 5, 2021",
        },
        {
            id: 2,
            title: "Sumbit Tax Declaration",
            descr: "Declare new regime as tax regime and also declare PPF account and house rent in tax deduction area.",
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: "Apr 25, 2021",
        },
        {
            id: 3,
            title: "Finish Oval Testing",
            descr: "Make sure all the existing test codes has been migrated to new framework. Check for any untested tasks in the project",
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: "Dec 21, 2021",
        },
    ];

    constructor(props: Readonly<ToDoBoardProps>){
        super(props);
        this.state={
            tasks: this.tasks,
        };
        this.addTask= this.addTask.bind(this);
        this.deleteTask= this.deleteTask.bind(this);
        this.updateTask= this.updateTask.bind(this);
    }

    addTask(task: any): void {
        console.log(this);
        if(!isEmpty(task.title))
            this.setState({tasks: [...this.state.tasks, task]});
    }
    
    private deleteTask(id: number){
        this.setState(
            {tasks: this.state.tasks.filter((task)=>{
                    return task.id!=id;
                })
            }
        );
    }

    private updateTask(updatedTask: any){
        this.setState({
            tasks: this.state.tasks.map((task)=>{
                if(task.id==updatedTask.id)
                    return updatedTask;
                else
                    return task;
            })
        });
    }
    

    render(): JSX.Element{
        return (
        <div  className="container mt-3">
            <nav className="navbar navbar-light bg-light mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ToDo</a>

                </div>
            </nav>
            {
                this.state.tasks.map((task)=>{
                    return (<ToDo task={task} onDeleteHandler={this.deleteTask} onUpdateHandler={this.updateTask} ></ToDo>);
                })
            }
            <div className="">
                <button type="button" className="btn btn-light border mb-3" data-bs-toggle="collapse" data-bs-target="#addFormCollapse">
                    <i className="bi bi-plus-square-fill me-2"></i>New
                </button>
                <AddToDo onSubmitHandler= {this.addTask}></AddToDo>
            </div>
           
        </div>);
    }
}
export default ToDoBoard;
