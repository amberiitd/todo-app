import Component from 'react';
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ToDo.css';

export interface ToDoProps{
    task :{
        id: number;
        title: string;
        descr: string;
        lastModified: string;
        dueDate: string
    };

    onDeleteHandler: (id: number)=> void,
    onUpdateHandler: (task: any)=> void,

}

interface ToDoState{
    descr: string;
    lastModified: any;
    dueDate: any;
}

class ToDo extends React.Component<ToDoProps, ToDoState>{

    private dateFormatOptions : any= { 
        weekday: "long", 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    constructor(props: Readonly<ToDoProps>){
        super(props);
        this.state={
            descr: props.task.descr,
            lastModified: props.task.lastModified,
            dueDate: props.task.dueDate,
        }
        this.localOnDeleteHandler= this.localOnDeleteHandler.bind(this);
        
        this.localOnUpdateHandler= this.localOnUpdateHandler.bind(this);
    }

    private localOnDeleteHandler(){
        this.props.onDeleteHandler(this.props.task.id);
    } 
    private localOnUpdateHandler(){
        
        this.props.onUpdateHandler({
            id: this.props.task.id,
            title: this.props.task.title,
            descr: this.state.descr,
            lastModified: new Date().toLocaleDateString('en-US', this.dateFormatOptions),
            dueDate: this.state.dueDate,

        });

    }

    render(): JSX.Element{
        return (
        <div className=" p-2 mb-3 border-5 border-start border-warning rounded-5 rounded-start">
            <div className="d-flex align-items-center mb-3 level-2">
                <div className="container me-4">
                    <h4 className="ps-0 mb-2">{this.props.task.title}</h4>
                    <p className="mb-3">{this.state.descr}</p>
                    <div className="d-flex text-muted justify-content-between">
                        <div className="me-auto">
                            <small>Last modified: {this.state.lastModified}</small>
                        </div>
                        <div>
                            <small>Due on: {this.state.dueDate}</small>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="btn" data-bs-toggle="collapse" data-bs-target={`#editFormCollapse-${this.props.task.id}`}>
                        <i className="bi bi-pencil-square"></i>
                    </button>
                </div>
                <div className="">
                    <button type="button" className="btn-close" onClick={this.localOnDeleteHandler}></button>
                </div>
            </div>
            <div className="collapse " id= {`editFormCollapse-${this.props.task.id}`}>
                <div className="mb-2">
                    <textarea className="form-control" placeholder="Description" value={this.state.descr} onChange={(e)=>{
                        this.setState({descr: e.target.value});
                    }}></textarea>
                </div>
                
                <div className="input-group mb-2">
                    <span className="input-group-text">Due Date</span>
                    <input type="date" className="form-control" placeholder="due-date" value={this.state.dueDate} onChange={(e)=>{
                        this.setState({dueDate: e.target.value});
                    }}/>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-sm btn-primary" data-bs-toggle="collapse" data-bs-target={`#editFormCollapse-${this.props.task.id}`} onClick= {()=>{this.localOnUpdateHandler()}}>Save</button>
                </div>

            </div>

            

        </div>);
    }
}
export default ToDo;