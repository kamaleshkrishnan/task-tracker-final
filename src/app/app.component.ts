
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input, AfterViewInit } from '@angular/core';
import { TaskServiceService} from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  taskForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private taskService: TaskServiceService) {}
  
  ngOnInit() {
    this.createTaskForm();
    this.taskService.getItems();
  }
  
  createTaskForm(){
    this.taskForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname:  ['', Validators.required],
      assigned:  ['', Validators.required]
    })
  }

}
