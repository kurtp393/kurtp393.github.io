function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" & x.id !== "dont") {
    x.className += " responsive1";
  } else {
    x.className = "topnav";
  }
}

 
function bK() {
   var modal1 = document.getElementById("BookkeepingModal");
   modal1.style.display = "block";
}
function aC() {
    var modal2 = document.getElementById("AccountingModal");
    modal2.style.display = "block";
}
function aN() {
    var modal3 = document.getElementById("ConsultingModal");
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function close1() {
    var modal1 = document.getElementById("BookkeepingModal");
    var modal2 = document.getElementById("AccountingModal");
    var modal3 = document.getElementById("ConsultingModal");
    var myModal = document.getElementById("myModal")
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    myModal.style.display = "none";
}

    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        var modal1 = document.getElementById("BookkeepingModal");
        var modal2 = document.getElementById("AccountingModal");
        var modal3 = document.getElementById("ConsultingModal");
        var myModal = document.getElementById("myModal")
      if (event.target == modal1 || event.target == modal3 || event.target == modal2) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        myModal.style.display = "none";
          
      }
    }
    

window.onscroll = function() {
       if ($(document).scrollTop() > 400 && document.getElementById('myModal').getAttribute("displayed")
=== "false") {
         document.getElementById('myModal').style.display = "block";
         document.getElementById("myModal").setAttribute("displayed", "true");
       }
     };



$(document).ready(function(){

   if($('.brands_slider').length)
        {
            var brandsSlider = $('.brands_slider');

            brandsSlider.owlCarousel(
            {
                loop:true,
                autoplay:true,
                autoplayTimeout:5000,
                nav:false,
                dots:false,
                autoWidth:true,
                items:8,
                margin:42
            });

            if($('.brands_prev').length)
            {
                var prev = $('.brands_prev');
                prev.on('click', function()
                {
                    brandsSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.brands_next').length)
            {
                var next = $('.brands_next');
                next.on('click', function()
                {
                    brandsSlider.trigger('next.owl.carousel');
                });
            }
        }


    });