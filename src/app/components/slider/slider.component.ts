import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
@Input() anchura:number;// parent component
  @Input('etiquetas') captions:boolean;
  @Output() conseguirAutor = new EventEmitter();
  public autor:any;
  constructor() { 
    this.autor={
      nombre:'Marco Yanchapanta',
      website:'marcoyanchapanta.com',
      youtube:'Marco Yanchapanta Web'
    }
  }

  ngOnInit(){
    
  	// $("#logo").click(function(e){
  	// 	e.preventDefault();
  	// 	$("header").css("background","green")
  	// 				.css("height","50px");
  	// });
    $(".galeria").bxSlider({
    mode: 'fade',
    captions: this.captions,
    slideWidth: this.anchura
  });
    // lanzare...this component loads even if the * ngIf = "widthToSlider" is missing
    this.conseguirAutor.emit(this.autor);//opcional
  }
  //what the other component will receive
  lanzar(event){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
