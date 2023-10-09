import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Question, QuestionForAdd } from '../Model/Question';
import { SurveyService } from '../service/survey.service';


@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private surveyService: SurveyService) { }

  surveyId!: number;
  addQuestionForm!: FormGroup;
  quest!: QuestionForAdd;
  questions:Question[]=[];

  ngOnInit() {

    this.surveyId = Number(this.route.snapshot.paramMap.get('id'));
    this.getQuestions(this.surveyId);
    this.createQuestionForm();
  }

  getQuestions(surveyId: number):void{

    this.surveyService.getQuestions(surveyId).subscribe(res=>{
      this.questions = res;
      console.log(this.questions);
    })


  }


  createQuestionForm(){

    this.addQuestionForm = this.fb.group({
      quest: new FormControl(null, Validators.required),
      option1: new FormControl(null, [Validators.required]),
      option2: new FormControl(null, [Validators.required]),
      option3: new FormControl(null, [Validators.required]),
      option4: new FormControl(null, [Validators.required])

    })


  }

  get question() {
    return this.addQuestionForm.get('quest') as FormControl;
  }
  get option1() {
    return this.addQuestionForm.get('option1') as FormControl;
  }
  get option2() {
    return this.addQuestionForm.get('option2') as FormControl;
  }
  get option3() {
    return this.addQuestionForm.get('option3') as FormControl;
  }
  get option4() {
    return this.addQuestionForm.get('option4') as FormControl;
  }



  questionData(): QuestionForAdd{
    return this.quest={

      quest: this.question.value,
      option1:this.option1.value,
      option2:this.option2.value,
      option3:this.option3.value,
      option4:this.option4.value

    }

  }

  onSubmit(){
    this.surveyService.addQuestion(this.surveyId, this.questionData()).subscribe(()=>{

      window.alert("Survey Added");

    },
    error=>{
      console.log(error.error);
    }


    );
  }

}
