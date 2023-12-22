// ------ REGEX --------
const UserRegex = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^(?:\d{1,3})?\d{10,14}$/;
const SujetRegex = /^[^{}<>$]{10,50}$/;
const CommentRegex = /^[^{}<>$]{30,500}$/;

// ------- VARIABLE -----------
let inputName = document.querySelector("#input1");
let inputFname = document.querySelector("#input2");
let inputTel = document.querySelector("#input3");
let inputEmail = document.querySelector("#input4");
let inputSujet = document.querySelector('#input5');
let inputComment = document.querySelector('#Textarea1');
const form = document.querySelector('form');

// ------ Validateurs ------
let nomValid = false;
let emailValid = false;
let telValid = false;

console.log(inputFname);
console.log(inputEmail);
console.log(form);

function addclass(element, regex, value, valid) {
    if (regex.test(value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        valid = true;
    } else {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        valid = false;
    }
    return valid;
}

inputName.addEventListener('input', (e) => { nomValid = addclass(inputName, UserRegex, e.target.value, nomValid); });
inputFname.addEventListener('input', (e) => { addclass(inputFname, UserRegex, e.target.value); });
inputTel.addEventListener('input', (e) => { telValid = addclass(inputTel, PhoneNumberRegex, e.target.value, telValid); });
inputEmail.addEventListener('input', (e) => { emailValid = addclass(inputEmail, EmailRegex, e.target.value, emailValid); });
inputSujet.addEventListener('input', (e) => { addclass(inputSujet, SujetRegex, e.target.value); });
inputComment.addEventListener('input', (e) => { addclass(inputComment, CommentRegex, e.target.value); });

form.addEventListener('submit', e => {
    e.preventDefault();
    nomValid = addclass(inputName, UserRegex, inputName.value, nomValid);
    emailValid = addclass(inputEmail, EmailRegex, inputEmail.value, emailValid);
    telValid = addclass(inputTel, PhoneNumberRegex, inputTel.value, telValid);

    if (emailValid && nomValid && telValid) {
        sendEmail();
    }
});
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        SecureToken: "6064c4eb-7d1c-4690-9d39-2ac0b3ec7da7",
        Username: "gophersjumping@gmail.com",
        Password: "9F44235F267BCC91210FC12C604C6CE0AFF7",
        To: 'lori.yalic@hotmail.fr',
        From: "gophersjumping@gmail.com",
        Subject: "Sujet",
        Body: "Votre message"
    }).then(
        message => alert(message)
    );
}


    // form.addEventListener('input', (e)=>{
//     e.preventDefault()
//     console.log(EmailRegex.test(inputEmail.value));
//     // NOM
// if (UserRegex.test(inputName.value)) {
//         inputName.classList.add('is-valid')
//         inputName.classList.remove('is-invalid')
//     }
// else {
//         inputName.classList.remove('is-valid')
//         inputName.classList.add('is-invalid')
//     }
// })
//     // EMAIL
//     form.addEventListener('submit', (e)=>{
//         e.preventDefault()
//     if (EmailRegex.test(inputEmail.value)) {
//         inputEmail.classList.add('is-valid');
//         inputEmail.classList.remove('is-invalid');
//     } else {
//         inputEmail.classList.add('is-invalid');
//         inputEmail.classList.remove('is-valid');
//     }
//     //  TELEPHONE
//     if (PhoneNumberRegex.test(inputTel.value)) {
//             inputTel.classList.add('is-valid')
//             inputTel.classList.remove('is-invalid')
//         }
//     else {
//             inputTel.classList.remove('is-valid')
//             inputTel.classList.add('is-invalid')
//         }

//     })
    
    
// // inputEmail.addEventListener('input', (e)=>{
// //     e.target.value()
// // })


// info email : 
// Mdp : Marignane.1
//Email : gophersjumping@gmail.com