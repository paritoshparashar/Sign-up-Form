 var pass = document.getElementById('pass') ;
 var repass = document.getElementById('repass') ;


var todo = function () {
    
    if ((pass.value === repass.value) && ( repass.value!=='' )) {
            pass.style.border = '5px solid green';
            repass.style.border = '5px solid green';
        }
    else if ((pass.value!== repass.value) && (pass.value!== '' && repass.value!== '')) {
            pass.style.border = '5px solid red';
            repass.style.border = '5px solid red';
        }
    else {
        pass.style.border = '3px solid #6c6c6c';
        repass.style.border = '3px solid #6c6c6c';
    }        
    
    }

pass.addEventListener('input',  todo);
repass.addEventListener('input', todo);

// var showAlertMessage = function (){
//     var banner = document.createElement("div");
//     banner.className = "validation-banner";
//     banner.textContent = "Password does not match";
//     repass.parentNode.insertBefore(banner, repass);
// }

document.getElementById('formm').addEventListener('submit', function (event){
    if (pass.value !== repass.value){
        event.preventDefault();
        alert('Password does not match');
    }
});