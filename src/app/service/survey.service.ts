import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, QuestionForAdd } from '../Model/Question';
import {Survey} from '../Model/Survey';
import { SurveyForAdd } from '../Model/Survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

constructor(private http: HttpClient) { }

getSurveys(): Observable<Survey[]>{

  return this.http.get<Survey[]>('http://localhost:5000/api/surveyadmin/getSurveys');
}

addSurvey(survey: SurveyForAdd){

  return this.http.post('http://localhost:5000/api/surveyadmin/addSurvey',survey);
}

deleteSurvey(id: number){
  return this.http.delete('http://localhost:5000/api/surveyadmin/deleteSurvey/'+id);
}

updateSurvey(id:any, survey:any){
  return this.http.put<any>('http://localhost:5000/api/surveyadmin/updateSurvey/'+id, survey);
}

publishSurvey(id:any){

  return this.http.put('http://localhost:5000/api/surveyadmin/publishSurvey/'+id,id)
}

addQuestion(surveyId:number,question: QuestionForAdd){
  return this.http.post('http://localhost:5000/api/surveyadmin/addquestion/'+surveyId,question);
}

getQuestions(surveyId: number):Observable<Question[]>{
  return this.http.get<Question[]>('http://localhost:5000/api/surveyadmin/getquestions/'+surveyId);
}

}
