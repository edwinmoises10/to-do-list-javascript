// JavaScript Flex - Entrega 1 
// Moises Oña 

// Variable Declaration

let access
let countAttemps = 0
let loginValidation = true
let displayName

// Functions

const user_prompt = () => prompt("Enter your Name: ").toLowerCase()

const password_prompt = () => {
    let password = parseInt(prompt("Enter your Password: "))
    return isNaN(password) ? 0 : password
}

const loginSession = (user, password) => {

    if ((user === "moises") && (password === 1234)) {
        console.log("Access approved")
        alert("Access approved")
        access = true
        loginValidation = false
        countAttemps = 0
    } else {
        console.log("Access denied")
        countAttemps += 1
    }
    return access 
}

const loginAttemps = () => {

    let userName
    let userPassword

    while (loginValidation) {

        userName = user_prompt()
        userPassword = password_prompt()
        loginSession(userName, userPassword)

        if ((countAttemps >= 1 && countAttemps <= 2)) {
            console.log("Login failed \nAttemps remain :" + (3 - countAttemps))
            alert("Login failed \nAttemps remain :" + (3 - countAttemps))

        } else if (countAttemps === 3) {
            loginValidation = false
            alert("To-Do List block your user")
        }
    }

    displayName = userName.charAt(0).toUpperCase() + userName.slice(1) 

    return displayName

}







// Code

alert(" ----------------Welcome ------------------- \n -------------Secure To-Do List-------------- ")
loginAttemps()

if (access) {
    alert("Welcome Back Dear : " + displayName)
}


