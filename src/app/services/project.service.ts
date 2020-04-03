import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
	public url:string;

	constructor(
		private _http: HttpClient
		){
		this.url=Global.url;
	}
	
	testService(){
		return 'Probando servicio de angular';
	}

	saveProject(project:Project):Observable<any>{
		let params=JSON.stringify(project);//To make the object a string
		let headers=new HttpHeaders().set('Content-Type','application/json');//For the object to travel in json
		// save-project.-method that I am going to use
		return this._http.post(this.url+'save-project',params,{headers: headers});
	}
	getProjects():Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'projects',{headers:headers});
	}

	getProject(id):Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'project/'+id,{headers:headers});
	}
	deleteProject(id):Observable<any>{
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'project/'+id,{headers:headers});
	}
	//we pass the entire project project, as parameter
	updateProject(project):Observable<any>{
		let params=JSON.stringify(project);
		let headers=new HttpHeaders().set('Content-Type','application/json');
		return this._http.put(this.url+'project/'+project._id,params,{headers:headers});
	}
} 