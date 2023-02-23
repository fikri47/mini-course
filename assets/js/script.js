const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  nav.classList.toggle("active", positionWindow);
});

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout("display_ct()", refresh);
  }
  
  function display_ct() {
    var x = new Date();
    document.getElementById("current_time").innerHTML = x;
    display_c();
  }

  var WelcomeName = prompt("Silahkan Isikan Nama Anda");
  document.getElementById("welcome-nama").innerText = WelcomeName;

  function validateForm() {
    var name = document.forms["message-form"]["nama"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["pesan"].value;

    if (name == "" || date == "" || gender == "" || messages == "") {
      alert("Input Tidak Boleh Kosong");
      return false;
    }
    
    document.getElementById("inputNama").innerText= name;    
    document.getElementById("inputDate").innerText = date;
    document.getElementById("inputGender").innerText = gender;
    document.getElementById("inputPesan").innerText = messages;
    return false

  }

  btnSubmit.addEventListener("click", validateForm);


