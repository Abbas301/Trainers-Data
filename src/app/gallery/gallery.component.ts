import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // [x: string]: any;
 
  empForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.empForm=this.fb.group({
            employees: this.fb.array([]) ,
          })
   }

  ngOnInit(): void {  
  } 
  employees(): FormArray {
        return this.empForm.get("employees") as FormArray
      }    
     
      newEmployee(): FormGroup {
        return this.fb.group({
           name: '',
           mobile: '',
           email: '',
           place: '',
        })  
      }
  
      addEmployee() {
        console.log("Adding a employee");
        this.employees().push(this.newEmployee());
      }
  
      onSubmit() {
        console.log(this.empForm.value);
      }  
    }
     
