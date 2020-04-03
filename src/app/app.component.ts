import { Component,OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'addBootstrap';

  constructor() {}
  

  ngOnInit(){
  	//Rechargeable Theme Picker
	var theme=$("#theme");
	//Retrieve color data from localStorage
	var a=localStorage.getItem("color_tema");	
	theme.attr("href","assets/css/"+a+".css");

	$("#negro").click(function(){
		theme.attr("href","assets/css/negro.css");
		localStorage.setItem("color_tema","negro");
		console.log(theme);
	});
	$("#rojo").click(function(){
		theme.attr("href","assets/css/rojo.css");
		localStorage.setItem("color_tema","rojo");
	});
	$("#verde").click(function(){
		theme.attr("href","assets/css/verde.css");
		localStorage.setItem("color_tema","verde");
	});
	$("#blanco").click(function(){
		theme.attr("href","assets/css/blanco.css");
		localStorage.setItem("color_tema","blanco");
	});
	$("#azul").click(function(){
		theme.attr("href","assets/css/azul.css");
		localStorage.setItem("color_tema","azul");
	});


	//Show error at the top
	// $.validate({ 
	// 	 lang: 'es',
	// 	 errorMessagePosition:'top',
	// 	 scrollToTopOnError:true
	// });
  }
}
