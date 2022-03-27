function homePage() {
    var x;
    x = document.getElementById('start-up');
    console.log(x);
    x.style.display = "none";
    var y;
    y = document.getElementById('home_page');
    y.id = "home_page_open";
    var z;
    z = document.getElementById('body');
    z.id = "body_home";
    }

    function myBackground(){
        x = document.getElementById('body_plot');
        x.id = "body_after";
    }

    function thirdPageBackground(){
        x = document.getElementById('body_characters');
        x.id = "body_after";
    }