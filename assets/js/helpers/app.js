var check = document.querySelector(".navbar__toggle--darkmode-input");
check.addEventListener('click', funciondarkmode);

function funciondarkmode() {
    console.log(check.checked);
}