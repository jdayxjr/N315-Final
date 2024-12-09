import * as $ from "jquery";
import { changePage } from "./model.js";








function initSite() {
    $(window).on("hashchange", route);
    route();
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("route", pageID);
    
   

    changePage(pageID);


}
   

function initListeners() {

    $(".cart-logo").on("click", function (){
        window.location.hash="cart";
        console.log("cart clicked");
    });

    $(".logo-photo").on("click", function () {
        window.location.hash = ""; 
        location.reload();  
       
    });

    $(".user-logo").on("click", function (){
        window.location.hash="account";
        console.log("account clicked");
    })


    $(".user-logo").hover(
        function () {
          $(".modal").css("display", "block"); 
        },
        function () {
          setTimeout(() => {
            
            if (!$(".user-logo:hover").length && !$(".modal-content:hover").length) {
              $(".modal").css("display", "none");
            }
          }, 100);
        }
      );
      
      $(".modal-content").hover(
        function () {
          $(".modal").css("display", "block"); 
        },
        function () {
          setTimeout(() => {
           
            if (!$(".user-logo:hover").length && !$(".modal-content:hover").length) {
              $(".modal").css("display", "none");
            }
          }, 100);
        }
      );
      
      
      $(".signBox").on("click", function (){
        window.location.hash="account";
        console.log("account clicked");
    })

}
 


$(document).ready(function () {
    initSite();
changePage();

initListeners();


});