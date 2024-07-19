const vname = document.getElementById('names')
const vemail = document.getElementById("email")
const form = document.getElementById('form')
const name_error = document.getElementById("name_error")
const email_error = document.getElementById("email_error")

form.addEventListener('submit', (e) => {
    if((vname.value === '') || (vname.value === null))
    {
        e.preventDefault();
        name_error.innerHTML = "Name is required"
    }

    if((vemail.value === '') || (vemail.value === null))
        {
            e.preventDefault();
            email_error.innerHTML = "Name is required"
        }
    var email_check = "^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+[.])+[a-z]{2,5}$"
    if(!vemail.value.match(email_check))
        {
            e.preventDefault();
            email_error.innerHTML = "valid Email is required"
        }
})