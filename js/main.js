// formspree
$("#sendMessage").on("click", function() {

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    if (name == "" || email == "" || phone == "" || message == ""){
        $('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
        $('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that you are missing some fields.");
        $('#success > .alert-danger').append('</div>');
        //clear all fields
        $('#contactForm').trigger("reset");
    }
    else{
        $.ajax({
            url: "//formspree.io/"+"telunchen"+"@"+"hotmail"+".com", 
            method: "POST",
            data: {
                name: name,
                email: email,
                phone: phone,
                message: message
            },
            dataType: "json"
        });
        // Enable button & show success message
        $("#btnSubmit").attr("disabled", false);
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
        $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
        $('#success > .alert-success').append('</div>');
    }
    return false;
});

// banner phone animation
$("#banner-img").on("load",function(){
    $("#banner-phone").animate({left:200, opacity:1},1500);
}).each(function() {
    if(this.complete) $(this).load();
});

// fade animation
$('#ecowaterless').on('inview',function(event, isInView){
    if(isInView){
        $(this).animate({'opacity':'1'},1000);
    }
    else{
        $(this).css('opacity','0');
    }
});

$('#soccermvp').on('inview',function(event, isInView){
    if(isInView){
        $(this).animate({'opacity':'1'},1500);
    }
    else{
        $(this).css('opacity','0');
    }
});

$('#designguru').on('inview',function(event, isInView){
    if(isInView){
        $(this).animate({'opacity':'1'},1500);
    }
    else{
        $(this).css('opacity','0');
    }
});

// circle
$('#circles').on('inview',function(event, isInView){
    if(isInView){
        $('#circle1').circleProgress({
            startAngle:0.7853*6,
            value: 0.9,
            size: 150,
            fill: {
                gradient: ["white"]
            }
        });
        $('#circle2').circleProgress({
            startAngle:0.7853*6,
            value: 0.8,
            size: 150,
            fill: {
                gradient: ["white"]
            }
        });
        $('#circle3').circleProgress({
            startAngle:0.7853*6,
            value: 0.70,
            size: 150,
            fill: {
                gradient: ["white"]
            }
        });
        $('#circle4').circleProgress({
            startAngle:0.7853*6,
            value: 0.9,
            size: 150,
            fill: {
                gradient: ["white"]
            }
        });
    }
});