import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
	public title:string;
	public project:Project;
	public status:string;
	public filesToUpload: Array<File>;
	public save_project;
	public url:string;

  constructor(
  	private _projectService:ProjectService,
    private _uploadService:UploadService
  	) { 
  	this.title='Crear proyecto';
  	this.project=new Project('','','','',2020,'','');
    this.url = Global.url;

  }

  ngOnInit(){
  }
  onSubmit(form){
    console.log(this.project);

    //GUARDAR DATOS BASICOS
    this._projectService.saveProject(this.project).subscribe(
      
      response=>{
        //console.log(response);
        if(response.project){
          if(this.filesToUpload){
            //SUBIR LA IMAGEN 
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, [], this.filesToUpload,'image')
                .then((result:any)=>{
                  this.save_project=result.project;
                  //console.log(result);
                  this.status='success';
                  form.reset();
                });
          }else{
            this.save_project=response.project;
            //console.log(result);
            this.status='success';
          }

          
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
      );
  }
  fileChangeEvent(fileInput:any){    
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
