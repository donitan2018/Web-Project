
 var slides=document.querySelector('.s-items').children;
 var next_slide=document.querySelector(".right-slide");
var prev_slide=document.querySelector(".left-slide");
var total_slides=slides.length;
var index=0;

next_slide.onclick=function () {
     next("right");
}
prev_slide.onclick=function () {
     next("left");
}

function next(direction){

   if(direction=="right"){
      index++;
       if(index==total_slides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=total_slides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}







