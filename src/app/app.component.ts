
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  taskForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.createTaskForm();
  }
  
  createTaskForm(){
    this.taskForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname:  ['', Validators.required],
      assigned:  ['', Validators.required]
    })
  }
  
}
