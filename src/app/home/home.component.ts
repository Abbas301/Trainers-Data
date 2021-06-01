import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DetailsService} from '../details.service';



export interface User {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  details:any = []
  name:any
  myControl = new FormControl();
  options: any[] = [ 'Gangadhar','Pavan','Nilim Sarma','Jashmine','Praveen']

  filteredOptions!: Observable<string[]>;

  empForm:FormGroup;

  constructor(private ds:DetailsService,private fb:FormBuilder) {
    this.empForm=this.fb.group({
            employees: this.fb.array([]) ,
          })
   }

  ngOnInit(): void {

    this.ds.getalldetails().subscribe(data=>
      {
        this.details = data;
        console.log(this.details);
      })

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value =>this._filter(value))
      );

      this.getdata();
     
  }
  

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
  
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  getdata() 
  {
   this.ds.getalldetails().subscribe(data=>
      {
        this.details = data;
        console.log(data);
      })
  }
  

  onFormSubmit(addProductForm:NgForm) {

    console.log(addProductForm.value);

    return this.ds.adddetails(addProductForm.value).subscribe(data =>
      {
        console.log(data);
          this.details = data;
      })
    
  }

  // adding cards
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
