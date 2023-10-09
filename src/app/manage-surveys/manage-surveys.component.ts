import { Component, OnInit } from '@angular/core';
import { Survey, SurveyForUpdate } from '../Model/Survey';
import { SurveyService } from '../service/survey.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { SurveyForAdd } from '../Model/Survey';

@Component({
  selector: 'app-manage-surveys',
  templateUrl: './manage-surveys.component.html',
  styleUrls: ['./manage-surveys.component.css']
})
export class ManageSurveysComponent implements OnInit {

  surveys: Survey[]=[];
  addSurveyForm!: FormGroup;
  survey!: SurveyForAdd;
  surveyUpdate!: SurveyForUpdate;
  selSurveyId!: number;



  constructor(private surveyService: SurveyService, private fb: FormBuilder) { }

  ngOnInit() {

    this.getSurveys();
    this.createRegistrationForm();
  }

  getSurveys(): void{

    this.surveyService.getSurveys().subscribe(res=>{

      this.surveys = res;
      console.log(this.surveys);
    })
  }

  createRegistrationForm(){

    this.addSurveyForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required])

    })


  }

  get title() {
    return this.addSurveyForm.get('title') as FormControl;
  }

  get description() {
    return this.addSurveyForm.get('description') as FormControl;
  }

  surveyData(): SurveyForAdd{

    return this.survey={

      title:this.title.value,
      description:this.description.value
    }
  }

  onSubmit(){
    console.log(this.addSurveyForm);

    if(this.addSurveyForm.valid){

      this.surveyService.addSurvey(this.surveyData()).subscribe(()=>{
        this.addSurveyForm.reset();
        this.getSurveys();
        window.alert("Survey Added");

      },
      error=>{
        console.log(error.error);
      }


      );

    }
  }


  deleteSurvey(id: number){

    console.log(id);
    this.surveyService.deleteSurvey(id).subscribe(res=>{
      this.getSurveys();
      window.alert("survey deleted");

    })
  }


  editSurvey(survey: any){
    this.selSurveyId = survey.id;
    this.addSurveyForm.controls['title'].setValue(survey.title);
    this.addSurveyForm.controls['description'].setValue(survey.description);
  }


  surveyUpdateData(): SurveyForUpdate{

    return this.surveyUpdate={
      id: this.selSurveyId,
      title:this.title.value,
      description:this.description.value
    }
  }



  updateSurvey(){
    this.surveyService.updateSurvey(this.selSurveyId, this.surveyUpdateData()).subscribe(res=>{
      this.getSurveys();
      window.alert("survey updated");
    })


  }


  publishSurvey(id: number){

    this.surveyService.publishSurvey(id).subscribe(res=>{

      this.getSurveys();
      window.alert("Published");
    })
  }


  // createAddQuestionForm(){

  //   this.addQuestionForm = this.fb.group({
  //     question: new FormControl(null, Validators.required),
  //     option1: new FormControl(null, [Validators.required]),
  //     option2: new FormControl(null, [Validators.required]),
  //     option3: new FormControl(null, [Validators.required]),
  //     option4: new FormControl(null, [Validators.required])

  //   })


  // }

  // get question() {
  //   return this.addSurveyForm.get('title') as FormControl;
  // }

  // get option1() {
  //   return this.addSurveyForm.get('description') as FormControl;
  // }

  // get option2() {
  //   return this.addSurveyForm.get('description') as FormControl;
  // }

  // get option3() {
  //   return this.addSurveyForm.get('description') as FormControl;
  // }

  // get option4() {
  //   return this.addSurveyForm.get('description') as FormControl;
  // }

}
