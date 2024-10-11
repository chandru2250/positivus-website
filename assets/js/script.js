const menu = document.getElementById("menuBtn");
const menuList = document.getElementById("navLinks");

menu.addEventListener("click", () => {
  menuList.classList.toggle("showmenu");
});

function myFunction(key) {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "flex";
    btnText.innerHTML = "<i class='fa fa-plus' aria-hidden='true'></i>";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<i class='fa fa-minus' aria-hidden='true'></i>";
    moreText.style.display = "flex";
  }
  console.log(key);
}

// $(document).ready(function()
// {
//     $('[id^="more"]').click(function()
//     {
//         let id = $(this).attr('id');
//         let num = /\d+/.exec(id)[0];
//         $('#details' + num).slideToggle();
//     });
// });
