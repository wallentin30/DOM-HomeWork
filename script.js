const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const userMessage = document.querySelector('#userMessage');
const gender = document.getElementsByName("gender");
const formValues = document.querySelector('input');

firstName.addEventListener('blur', (e) => {
    if (firstName.value === "") {
        e.target.style.border = '1px solid red';
    }

    if (firstName.value !== "") {
        e.target.style.border = "1px solid black";
    }
})

lastName.addEventListener('blur', (e) => {
    if (lastName.value === "") {
        e.target.style.border = '1px solid red';
    }

    if (lastName.value !== "") {
        e.target.style.border = "1px solid black";
    }
})

userMessage.addEventListener('blur', (e) => {
    if (userMessage.value === "") {
        e.target.style.border = '1px solid red';
    }

    if (userMessage.value !== "") {
        e.target.style.border = "1px solid black";
    }
})

function checkForm() {
    const succesMessage = document.querySelector('#succesMessage');
    if (firstName.style.border === "1px solid red" || lastName.style.border === "1px solid red" ||
        userMessage.style.border === "1px solid red" || formValues.value === "") {
        alert('Please fill all inputs!Thank you!')
    } else {
        succesMessage.innerHTML = ` <i class="fas fa-check-circle"></i>
            Thank you for contacting us, ${firstName.value} <span id="close">&#10005;</span>`;
        succesMessage.style.visibility = "visible";

        document.querySelector("#close").addEventListener('click', function() {
            document.querySelector("#succesMessage").style.visibility = "hidden";
        })
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                console.log(` Contact Form Response \n 
                First Name: ${firstName.value} \n 
                Last Name: ${lastName.value} \n
                Gender: ${gender[i].value} \n
                Message: ${userMessage.value}`);
            }
        }
    }
}