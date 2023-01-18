
(function () {
  emailjs.init("6F77UowF3zBMyXwGl");
})();

window.onload = function () {

  

  document
    .getElementsByClassName("bar_icon")[0]
    .addEventListener("click", () => {
      toggleMenuBtn();
    });
  function toggleMenuBtn() {
    let nav_menu = document.getElementsByClassName("nav__menu")[0];
    if (nav_menu.classList.contains("active") == false) {
      nav_menu.classList.add("active");
    } else {
      nav_menu.classList.remove("active");
    }
  }
  
  function closeToggle(){
    let nav_menu = document.getElementsByClassName("nav__menu")[0];
    nav_menu.classList.add("active");
  }

  //메뉴 클릭시 이동 
  document.getElementById("home").onclick = function () {
    window.scrollTo(0, 0);
    closeToggle();
  };

  document.getElementById("aboutme").onclick = function () {
    window.scrollTo(0, window.pageYOffset +  document.getElementById("about_title").getBoundingClientRect().top - 120);
    closeToggle();
  };

  document.getElementById("gallery").onclick = function () {
    window.scrollTo(0, window.pageYOffset +  document.getElementsByClassName("gallery")[0].getBoundingClientRect().top - 120);
    closeToggle();
  };
  document.getElementById("contact").onclick = function () {
    window.scrollTo(0, window.pageYOffset +  document.getElementById("contact_menu").getBoundingClientRect().top - 120);
    closeToggle();
  };
  
  document.getElementsByClassName("contact_btn")[0].onclick = function () {
    window.scrollTo(0, window.pageYOffset +  document.getElementById("contact_menu").getBoundingClientRect().top - 120);
    closeToggle();
  };
  
  

  document.querySelector("#insta").addEventListener("click", () => {
    var link = "https://www.instagram.com/paulipinska/";
    location.href = link;
  });
  
  document.querySelector("#mail").addEventListener("click", () => {
    alert("email address is copied!");
  });

  function sendMail(){
    alert("sending mail...");
  }

  /* 
    
  
    
   
    
  
    var menu_btns = document.getElementsByClassName("menu_btn");
    for (var i = 0; i < menu_btns.length; i++) {
      menu_btns[i].addEventListener("mouseleave", function () {});
    }
  };
  */
};

function sendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_m9bltdb", "template_q2k34tl", params)
    .then(function (res) {
      console.log("Sucess! " + res.status);
      alert(
        "Your message has been successfully sent. \n Please wait a few days for the reply."
      );
      location.reload(true);
    });
    
}

