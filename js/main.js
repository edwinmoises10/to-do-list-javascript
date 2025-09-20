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

// array Views
let userViewData = ""

//new taks
let newTask
let newTaskDay
let newTaskMonth
// edit task
let editTask
let updateTask
let updateDay
let updateMonth
//delete task
let taskDelete

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

// Function View Arrays User
function viewArrayDetails() {
    userViewData = ""
    let countArray = 1
    let countArrayDayMonth = 0

    for (const taskData of tasks) {
        const taskDay = days[countArrayDayMonth]
        const taskMonth = months[countArrayDayMonth]

        const taskDataCap = taskData.charAt(0).toUpperCase() + taskData.slice(1)
        const taskMonthCap = taskMonth.charAt(0).toUpperCase() + taskMonth.slice(1)

        userViewData += `${countArray}. On ${taskMonthCap} ${taskDay} you have this task: ${taskDataCap}\n`

        countArrayDayMonth++
        countArray++
    }

 alert("---------------------------------------------------\n" + userViewData +       "---------------------------------------------------")

    return userViewData
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
                    alert("You choose not to add a new task. Returning to menu...")
                }
                break

            case 2:

                viewArrayDetails()

                editTask = parseInt(prompt("Please choose the task you want to edit")) - 1
                editTask = isNaN(editTask) ? -1 : editTask
                if (userChoice() && (editTask < tasks.length) && (editTask >= 0)) {
                    alert(
                        "You selected: " + "\n" +
                        "Task : " + tasks[editTask] + "\n" +
                        "Date : " + months[editTask] + " " + "Day : " + days[editTask])

                    updateTask = newTask_prompt()
                    updateDay = newTaskDay_prompt()
                    updateMonth = newTaskMonth_prompt()

                    tasks[editTask] = updateTask
                    days[editTask] = updateDay
                    months[editTask] = updateMonth

                    alert("Task updated successfully!")
                } else {
                    alert("Not found")
                }
                break

            case 3:
                viewArrayDetails()

                taskDelete = parseInt(prompt("Please choose the task you want to delete")) - 1
                taskDelete = isNaN(taskDelete) ? -1 : taskDelete
                if (userChoice() && (taskDelete < tasks.length) && (taskDelete >= 0)) {
                    tasks.splice(taskDelete, 1)
                    days.splice(taskDelete, 1)
                    months.splice(taskDelete, 1)
                    alert("Task Delete")
                } else {
                    alert("Not found")
                }
                break


            case 4:
                viewArrayDetails()
                break

            default:
                alert("Wrong item")
        }
        menuSwitch = menu()
    }
}


