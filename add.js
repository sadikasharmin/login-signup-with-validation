const signUp = () =>{
    const signup = document.getElementById('signUp');
    const login = document.getElementById('login');
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');
    signup.classList.add('border-b-2');
    signup.classList.add('border-sky-900');
    login.classList.remove('border-b-2');
    login.classList.remove('border-sky-900');

    //display form
    loginForm.classList.add('hidden');
    signUpForm.classList.add('block');
    signUpForm.classList.remove('hidden');
    loginForm.classList.remove('block');

}

const signIn = () =>{
    const signup = document.getElementById('signUp');
    const login = document.getElementById('login');
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');
    signup.classList.remove('border-b-2');
    signup.classList.remove('border-sky-900');
    login.classList.add('border-b-2');
    login.classList.add('border-sky-900');

    //display form
    
    signUpForm.classList.remove('block');
    signUpForm.classList.add('hidden');
    loginForm.classList.add('block');
    loginForm.classList.remove('hidden');

}
signUp();

// const validation = () =>{
//     var name =
//         document.forms.RegForm.Name.value;
//     var email =
//         document.forms.RegForm.EMail.value;
//     var phone =
//         document.forms.RegForm.Telephone.value;
//     var password =
//         document.forms.RegForm.Password.value;
//     var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
//     var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
//     var regName = /\d+$/g;                                    // Javascript reGex for Name validation

//     if (name == "" || regName.test(name)) {
//         window.alert("Please enter your name properly.");
//         name.focus();
//         return false;
//     }

//     if(name.length < 6){
//         window.alert("Name should be atleast 6 character long.");
//         name.focus();
//         return false;
//     }
        
//     if (email == "" || !regEmail.test(email)) {
//         window.alert("Please enter a valid e-mail address.");
//         email.focus();
//         return false;
//     }
        
//     if (password == "") {
//         alert("Please enter your password");
//         password.focus();
//         return false;
//     }

//     if(password.length <6){
//         alert("Password should be atleast 6 character long");
//         password.focus();
//         return false;

//     }
//     if (phone == "" || !regPhone.test(phone)) {
//         alert("Please enter valid phone number.");
//         phone.focus();
//         return false;
//     }


//     return true;
    
// }

const validation = () =>{
    let name = document.forms.RegForm.Name.value;
    let email = document.forms.RegForm.EMail.value;
    let phone = document.forms.RegForm.Telephone.value;
    let password = document.forms.RegForm.Password.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;
    if(name.length < 6){
        alert('Should be atleast 6 words');
        name.focus();
        return false;
    }
    if( !regEmail.test(email) ){
        alert('Please give proper Email!');
        email.focus();
        return false;
    }

    if(!regPhone.test(phone)){
        alert('Please give proper Phone Number!');
        phone.focus();
        return false;   
    }
    if(password.length < 6){
        alert('Password Should be atleast 6 words');
        password.focus();
        return false;
    }

    return true
}