// JavaScript Flex - Entrega 1 
// Moises Oña 

// Variable Declaration

let access
let countAttemps = 0
let loginValidation = true
let displayName

// Code - Variables
let menuSwitch


//Code - variables - Array 

let tasks = []
let days = []
let months = []

let newTask
let newTaskDay
let newTaskMonth

let editTask

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


const menu = () => {
    let items = parseInt(prompt("To Do List \n 1. Add Task \n 2. Edit Task \n 3. Delete Task \n 4. View Tasks \n 5. Exit"))
    return isNaN(items) ? 0 : items
}

// Array values 

const newTask_prompt = () => prompt("Hi" + " " + displayName + " please add your new Task: ")
const newTaskDay_prompt = () => parseInt(prompt("Please enter the day of the month: "))
const newTaskMonth_prompt = () => prompt("Enter the Month for your task: ")


function userChoice() {
    let user_choise = confirm("Do you want to continue?")
    return user_choise
}



// Code

alert(" ----------------Welcome ------------------- \n -------------Secure To-Do List-------------- ")
loginAttemps()

if (access) {
    alert("Welcome Back Dear : " + displayName)

    menuSwitch = menu()


    while (menuSwitch !== 5) {


        switch (menuSwitch) {


            // "To Do List \n 1. Add Task \n 2. Edit Task \n 3. Delete Task \n 4. View Tasks \n 5. Exit"

            case 1:

                newTask = newTask_prompt()
                newTaskDay = newTaskDay_prompt()
                newTaskMonth = newTaskMonth_prompt()

                if (userChoice()) {
                    tasks.push(newTask)
                    days.push(newTaskDay)
                    months.push(newTaskMonth)
                    alert("-----------------" + "\n" + "done! " + displayName + "\n" + "Task added!" + "\n" + "-----------------")
                } else {
                    alert("You chose not to add a new task. Returning to menu...");
                }


                break

            case 2:
                break


            case 3:
                break


            case 4:
                let countArray = 1
                let userViewData = ""

                for (let i = 0; i < tasks.length; i++) {
                    const taskDataCap = tasks[i].charAt(0).toUpperCase() + tasks[i].slice(1)
                    const taskMonthCap = months[i].charAt(0).toUpperCase() + months[i].slice(1)
                    userViewData += countArray + ". On " + taskMonthCap + " " + days[i] + ", you have this task: " + taskDataCap + "\n"
                    countArray += 1
                }

                alert("-----------------------------------------" + "\n" + userViewData + "\n" + "-----------------------------------------")
                break

            default:
                alert("Wrong item")
        }

        menuSwitch = menu()


    }



}


