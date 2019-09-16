var username=document.getElementById('username');
var password=document.getElementById('password');


console.log(username);
  console.log(password);

document.getElementById('button').addEventListener('click',
function(){

 if(username.value.length<4)
  {
    console.log(username);
    console.log(password);
    document.querySelector('.bg-modal').style.display = 'block';
    document.getElementById('alert').innerText="Minimum characters should be 4";
  }
  else if(username.value == "" || password.value == ""){
    console.log(username);
    console.log(password);
    document.querySelector('.bg-modal').style.display = 'block';
    document.getElementById('alert').innerText="Please enter your username and password";

  }
  else{

      console.log(username);
      console.log(password);
      document.querySelector('.bg-modal').style.display = 'block';
      document.getElementById('alert').innerText="\nHello!!! "+ username.value;
    }
});

document.querySelector('.close').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });
