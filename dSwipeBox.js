/***
 * Name: dSwipeBox
 * 
 * Description: dSwipeBox is an independent and lightweight image box modal, which is highly integrateble with AngularJS, 
 * React.js and Vue.js. Apart from CSS file it have not any other dependency
 * 
 * Author: Dakshim Chhabra
 * 
 * Author Website: www.dakshim.com 
 * 
 * Development Status: pre-alpha-0.0.1
 */


/***
 * Main Function for the wrapper
 */

function dSwipeBox(settings = null){
     if(settings != null){
        this.settings = settings;
     } else{
         this.settings = {
             color: '#0000',
             background: '#fff',
             container: '.dswipe-box'
         }
     }


     addSwipeBoxModal();

 }

 /***
  * Creates HTML/ Document Nodes 
  */

 function addSwipeBoxModal(){
    var dSwipeBoxModal = document.createElement("div");
        dSwipeBoxModal.setAttribute("id", "dSwipeBox");
        dSwipeBoxModal.setAttribute("class", "dswipe-box-wrap");
        
    var dSwipeBoxClose = document.createElement("span");
        dSwipeBoxClose.setAttribute("class", "dswipe-close");
        dSwipeBoxClose.textContent("&times;");

    var dSwipeBoxImage = document.createElement("img");
        dSwipeBoxImage.setAttribute("class", "dswipe-image");
        dSwipeBoxImage.setAttribute("id", "dswipeImage");
         
    var dSwipeBoxCaption = document.createElement("div");
        dSwipeBoxCaption.setAttribute("class","dswipe-caption");
        dSwipeBoxCaption.setAttribute("id","dSwipeCaption");


        dSwipeBoxModal.appendChild(dSwipeBoxClose);
        dSwipeBoxModal.appendChild(dSwipeImage);
        dSwipeBoxModal.appendChild(dSwipeBoxCaption);
 }

/***
 * Query all images inside the Document with swipr box class
 */
function getSwipeBoxImages(imgClass){
    return document.querySelectorAll(imgClass);
}


/***
 *  Query image caption
 */
function getSwipeBoxCaption(){

}


/***
 * Set events for the swipeBox
 */
function setSwipeBoxEvents(imgClass){
    var close = document.querySelector(".dswipe-close");
    close.onclick = hideSwipeBox();


    var img = getSwipeBoxImages();

    img.forEach(function(img) {
        img.addEventListener('click', function() {
            showSwipeBox();
        });
      });
}

/***
 * Hide swipe box
 */
function hideSwipeBox(){
    var model = document.getElementById("dSwipeBox");
    model.style.display ="none";
}

/***
 * Show swipe box
 */
function showSwipeBox(){
    var model = document.getElementById("dSwipeBox");
    model.style.display ="block";
}
