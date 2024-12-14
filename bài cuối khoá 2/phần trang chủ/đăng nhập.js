const btnRegister = document.querySelector(".formRegister")
btnRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNameVL=  document.querySelector(".userName").value;
  const emailVl = document.querySelector(".Email").value;
  const passVl = document.querySelector(".Password").value;

  if ( emailVl === "" && passVl === "" && userNameVL ==="") {
    alert("Vui lòng không để trống form");
  }
   else if (userNameVL ===""){
    alert ("vui lòng nhập họ tên !!!");
   }
   else if (emailVl === "") {
    alert("Vui lòng điền email!!!");
  } 
  else if (passVl === "") {
    alert("Vui lòng điền password!!!");
  }

  else if (emailVl===emailVl && passVl===passVl && userNameVL=== userNameVL ){
    alert("Đăng nhập thành công")
  }

});






