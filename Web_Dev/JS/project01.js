const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validemail = false;
let validphone = false;
// $('#success').hide();
// $('#failure').hide();

name.addEventListener('blur', () => {
    console.log("name has been blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,15}$/;
    let str = name.value;
    console.log(str);
    if (regex.test(str)) {
        console.log("Is-valid name");
        name.classList.remove('is-invalid');
        validname = true;
    } else {
        console.log("Is-notvalid name");
        name.classList.add('is-invalid');
        validname = false;
    }

})

email.addEventListener('blur', () => {
    console.log("email has been blurred")
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;;
    let str = email.value;
    console.log(str);
    if (regex.test(str)) {
        console.log("Is-valid email");
        email.classList.remove('is-invalid')
        validemail = true;;
    } else {
        console.log("Is-notvalid email");
        email.classList.add('is-invalid')
        validemail = false;;

    }
})

phone.addEventListener('blur', () => {
    console.log("phone has been blurred")
    let regex = /([0-9]){10}/;
    let num = phone.value;
    if (regex.test(num)) {
        console.log('Is-valid phone no');
        phone.classList.remove('is-invalid');
        validphone = true;
    } else {
        console.log("Is-notvalid phone no");
        phone.classList.add('is-invalid');
        validphone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validname && validemail && validphone) {
        console.log("Your form has been successfully submitted");
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide(); //with JQUIRY
        $('#success').show(); //with JQUIRY
    } else {
        console.log("please fill the credentials properly");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }


})