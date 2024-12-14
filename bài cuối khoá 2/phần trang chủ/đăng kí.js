const btnRegister = document.querySelector(".formRegister")
btnRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  const userNameVL=  document.querySelector(".userNameregister").value;
  const emailVl = document.querySelector(".Emailregister").value;
  const passVl = document.querySelector(".Passwordregister").value;

  if (  userNameVL==="" && emailVl === "" && passVl === "") {
    alert("Vui lòng không để trống form");
  } else if (userNameVL===""){
    alert("Vui lòng điền username")
  }
   else if (emailVl === "") {
    alert("Vui lòng điền email!!!");
  } 
  else if (passVl === "") {
    alert("Vui lòng điền password!!!");
  }
  
  else if(userNameVL===userNameVL && emailVl===emailVl && passVl==passVl){
    alert("Đăng kí thành công");
  }
});

/////

btnRegister.addEventListener("submit", function (e) {
  e.preventDefault();
 
  userName = document.querySelector('.userNameregister').value;
	Email = document.querySelector('.Emailregister').value;
	Password = document.querySelector('.Passwordregister').value;
	confirmPwd = document.querySelector('.password-confirmation').value;
	

	if(Password != confirmPwd) {
		alert('Mat khau nhap khong khop!!! ')
		return false;
	}
  
  localStorage.setItem('userNameregister',userName );
  localStorage.setItem('Emailregister',Email );
  localStorage.setItem('Passwordregister',Password);

	return true;

 
});


