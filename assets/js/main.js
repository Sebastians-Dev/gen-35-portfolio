import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send__form.js";
//import funciondarkmode from "./helpers/app.js"

parallax()

activeMenu()

resetToHome()

updateCopyrightYear()

sendEmail()

//funciondarkmode()



var darkmodeToggle = document.getElementById("darkmode-toggle");


darkmodeToggle.addEventListener("change", function() {
  var body = document.body;


  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});




var languageToggle = document.getElementById('language-toggle');


languageToggle.addEventListener('change', function() {
  
  if (this.checked) {
    location.href="/index_in.html";
    } 
else {
    location.href="/index.html"
    
  }
});

