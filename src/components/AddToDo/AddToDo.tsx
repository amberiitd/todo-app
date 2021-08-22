import Component from 'react';
import React from 'react';
import {useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ToDoBoard from '../ToDoBoard/ToDoBoard';

export interface AddToDoProps{
    onSubmitHandler: (task:any)=> void;
}

interface AddToDoState{
    formTitle: string;
    formDescr: string;
    formDueDate: string;
}

class AddToDo extends React.Component<AddToDoProps,AddToDoState>{
    private dateFormatOptions : any= { 
        weekday: "long", 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    private id= Math.floor(Math.random()*100);


    constructor(props: Readonly<AddToDoProps>){
        super(props);
        this.state={
            formTitle: '',
            formDescr: '',
            formDueDate: new Date().toLocaleDateString('en-US'),
        }
        this.localOnSubmit= this.localOnSubmit.bind(this);

    }

    private localOnSubmit(){
        this.props.onSubmitHandler({
            id: this.id,
            title: this.state.formTitle,
            descr: this.state.formDescr,
            lastModified: new Date().toLocaleDateString("en-US",  this.dateFormatOptions ),
            dueDate: this.state.formDueDate,
        });

        this.id+=1;

        this.setState({
            formTitle: '',
            formDescr: '',
            formDueDate: '',
        });
    }

    render(): JSX.Element{
        return (
            <div className="collapse" id="addFormCollapse">
                <div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Title" value={this.state.formTitle} onChange={(e)=> {this.setState({formTitle: e.target.value})}} />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Description" value={this.state.formDescr} onChange={(e)=> {this.setState({formDescr: e.target.value})}} ></textarea>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Due on</span>
                        <input type="date" id="datePicker" className="form-control" value={this.state.formDueDate} onChange={(e)=> {this.setState({formDueDate: e.target.value})}} />
                        
                    </div>
                    <div className="d-flex justify-content-end">
                        <button  type='submit' className="btn btn-primary btn-sm" onClick={this.localOnSubmit}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddToDo;