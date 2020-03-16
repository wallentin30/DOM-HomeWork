
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const userMessage = document.querySelector('#userMessage');


firstName.addEventListener('blur', (e) => {
    if(firstName.value === "") {
        e.target.style.border = '1px solid red';
        return;
    }

    if (firstName.value !== "") {
        e.target.style.border = "1px solid black";
    }
})

lastName.addEventListener('blur', (e) => {
    if(lastName.value === "") {
        e.target.style.border = '1px solid red';
        return;
    }

    if (lastName.value !== "") {
        e.target.style.border = "1px solid black";
    }
})

userMessage.addEventListener('blur', (e) => {
    if(userMessage.value === "") {
        e.target.style.border = '1px solid red';
        return;
    }

    if (userMessage.value !== "") {
        e.target.style.border = "1px solid black";
    }
})

function succesMessage() {
    const succesMessage = document.querySelector('#succesMessage');
    succesMessage.innerHTML = ` <i class="fas fa-check-circle"></i>
        Thank you for contacting us, ${firstName.value} <span id="close">&#10005;</span>`;
    succesMessage.style.visibility = "visible";

    document.querySelector("#close").addEventListener('click', function() {
            document.querySelector("#succesMessage").style.visibility = "hidden";    
        })
    
        
        
        console.log(` First Name: ${firstName.value} \n Last Name: ${lastName.value} \n Message: ${userMessage.value}`);
    
    
    
}
