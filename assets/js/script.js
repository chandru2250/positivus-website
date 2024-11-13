const menu = document.getElementById("menuBtn");
const menuList = document.getElementById("navLinks");
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const Email = document.getElementById("Email");
const Message = document.getElementById("Message");

menu.addEventListener("click", () => {
  menuList.classList.toggle("showmenu");
});

function myFunction(key) {
  var dots = document.getElementById("dots-" + key);
  var moreText = document.getElementById("more-" + key);
  var btnText = document.getElementById("myBtn-" + key);
  var cards = document.getElementById("cards-" + key);

  if (dots.style.display === "none") {
    dots.style.display = "flex";

    btnText.innerHTML = "<i class='fa fa-plus' aria-hidden='true'></i> ";
    moreText.style.display = "none";
    cards.style.backgroundColor = "#f3f3f3";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<i class='fa fa-minus' aria-hidden='true'></i>";
    moreText.style.display = "flex";
    cards.style.backgroundColor = "#b9ff66";
  }
  console.log();
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validateInput();
// });

function validateInput() {
  

  const fnameval = fname.value.trim();
  const Emailval = Email.value.trim();
  const Messageval = Message.value.trim();

  if (fnameval === "") {
    setError(fname, "fname is required");
  } else {
    setSuccess(fname);
  }

  if (Emailval === "") {
    setError(Email, "email is required");
  } else {
    if (!validateEmail(Emailval)) {
      setError(Email, "please enter he valid email");
    } else {
      setSuccess(Email);
    }
  }

  if (Messageval === "") {
    setError(Message, "Message is required");
  } else {
    setSuccess(Message);
  }
  console.log("valid");
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// $(document).ready(function()
// {
//     $('[id^="more"]').click(function()
//     {
//         let id = $(this).attr('id');
//         let num = /\d+/.exec(id)[0];
//         $('#details' + num).slideToggle();
//     });
// });
