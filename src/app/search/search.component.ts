import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from '../movies.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  submitAttempt = false;

  response=null;

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private service: MoviesService
  ) { }





  ngOnInit() {

    this.buildForm();


    this.filteredOptions = this.form.controls['userQuery'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  buildForm() {
    this.form = this.fb.group(
      {
        userQuery: [null, Validators.required],
        operator: ['AND', Validators.required],
      }
    );

  }

  isFieldInvalid(fieldName) {
    if (this.submitAttempt && !this.form.controls[fieldName].valid)
      return true;
    return false;

  }

  onSubmit(){
    this.submitAttempt=true;
    console.log(this.form.value)

     if (this.form.valid){
      console.log('form is valid',this.form.value);
      this.service.search(this.form.value).subscribe(
        
        res=>{
          console.log('THIS IS RESPONSE',res);
          this.response=res;
          this.submitAttempt=false;
      
        },
        err=>console.error(err)

      )

  }else{
    this.response=null;
  }
}

  

}
