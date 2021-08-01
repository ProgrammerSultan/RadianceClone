window.addEventListener("load", () =>{
    document.querySelector(".load").style.display = 'none'
})


jQuery(document).ready(function(){
    jQuery('.qstn1, .plusone, .minusone').click(function(){
        jQuery('.ans1').toggle("slow")
        jQuery('.plusone').toggle("slow")
        jQuery('.minusone').toggle("slow")
    })
    jQuery('.qstn2 , .plustwo, .minustwo').click(function(){
        jQuery('.ans2').toggle("slow")
        jQuery('.plustwo').toggle("slow")
        jQuery('.minustwo').toggle("slow")
    })
    jQuery('.qstn3, .plusthree, .minusthree').click(function(){
        jQuery('.ans3').toggle("slow")
        jQuery('.plusthree').toggle("slow")
        jQuery('.minusthree').toggle("slow")
    })
    jQuery('.qstn4, .plusfour, .minusfour').click(function(){
        jQuery('.ans4').toggle("slow")
        jQuery('.plusfour').toggle("slow")
        jQuery('.minusfour').toggle("slow")
    })
    jQuery('.qstn5, .plusfive, .minusfive').click(function(){
        jQuery('.ans5').toggle("slow")
        jQuery(".plusfive").toggle("slow")
        jQuery(".minusfive").toggle("slow")
    })


    //carousel starts here
    $('.owl-carousel').owlCarousel({
        autoPlay:true,
        autoPlayTimeout:1000
    })
})


