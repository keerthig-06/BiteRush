let total = 0;

let items = [];


let menu = {

    "Dominos": [
        ["Cheese Pizza", 299],
        ["Chicken Pizza", 199],
        ["Burger", 149]
    ],

    "Pizza Hut": [
        ["Cheese Pizza", 349],
        ["Pasta", 199],
        ["Tandoori", 129]
    ],

    "A2B": [
        ["Dosa", 80],
        ["Ghee Kara Dosa", 100]
    ],

    "Indian Kitchen": [
        ["Biryani", 120],
        ["Butter Chicken", 180]
    ],

    "Kongu Porota": [
        ["Porota", 40],
        ["Egg Porota", 60]
    ],

    "Fresh Juice": [
        ["Watermelon Juice", 50],
        ["Pomegranate Juice", 70],
        ["Apple Juice", 35]
    ]

};


// SHOW REGISTER PAGE

function showRegister() {

    document.getElementById("login").style.display = "none";

    document.getElementById("register").style.display = "block";

}


// SHOW LOGIN PAGE

function showLogin() {

    document.getElementById("register").style.display = "none";

    document.getElementById("login").style.display = "block";

}


// REGISTER

function registerUser() {

    let name =
        document.getElementById("regName").value;

    let username =
        document.getElementById("regUser").value;

    let password =
        document.getElementById("regPass").value;


    if (name == "" || username == "" || password == "") {

        alert("Please fill all fields");

        return;
    }


    localStorage.setItem("name", name);

    localStorage.setItem("username", username);

    localStorage.setItem("password", password);


    alert("Registration successful!");

    showLogin();

}


// LOGIN

function loginUser() {

    let username =
        document.getElementById("loginUser").value;

    let password =
        document.getElementById("loginPass").value;


    let savedUser =
        localStorage.getItem("username");

    let savedPass =
        localStorage.getItem("password");


    if (username == savedUser && password == savedPass) {

        alert("Login successful!");

        document.getElementById("login").style.display = "none";

        document.getElementById("home").style.display = "block";

    }

    else {

        alert("Invalid username or password");

    }

}


// LOGOUT

function logout() {

    document.getElementById("home").style.display = "none";

    document.getElementById("login").style.display = "block";

}


// SHOW MENU

function showMenu(restaurant) {

    let foodItems =
        document.getElementById("foodItems");


    foodItems.innerHTML =
        "<h3>" + restaurant + "</h3>";


    for (let i = 0; i < menu[restaurant].length; i++) {

        foodItems.innerHTML +=

            "<div class='food'>" +

            menu[restaurant][i][0] +

            " - ₹" +

            menu[restaurant][i][1] +

            " <button onclick=\"addItem('" +

            menu[restaurant][i][0] +

            "'," +

            menu[restaurant][i][1] +

            ")\">Add</button>" +

            "</div>";

    }

}


// ADD ITEM

function addItem(name, price) {

    items.push(name);

    total = total + price;


    document.getElementById("cartItems").innerHTML =
        items.join(", ");

    document.getElementById("total").innerHTML =
        total;

}


// PLACE ORDER

function placeOrder() {

    window.location.href = "order.html";

}