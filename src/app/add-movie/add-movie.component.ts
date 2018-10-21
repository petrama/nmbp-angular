import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service:MoviesService
    ) { }


  form: FormGroup;
  submitAttempt=false;

  formSubmittedSuccess=false;
  

  ngOnInit() {
    this.buildForm();

  }

  buildForm(){
    this.form=this.fb.group(
      {
        title:[null,Validators.required],
        category:[null,Validators.required],
        summary:[null,Validators.required],
        description:[null,Validators.required]


      }
    )


  }
  isFieldInvalid(fieldName){

    if (this.submitAttempt && !this.form.controls[fieldName].valid)
      return true;
    return false;
    
  }

  onSubmit(){
    this.submitAttempt=true;
    console.log(this.form.value)

    if (this.form.valid){
      console.log('form is valid',this.form.value);
      this.service.addMovie(this.form.value).subscribe(
        
        res=>{
          console.log('THIS IS RESPONSE',res);
          this.submitAttempt=false;
          this.formSubmittedSuccess=true;
        },
        err=>console.error(err)

      )

  }else{
    this.formSubmittedSuccess=false;
  }
}

}
