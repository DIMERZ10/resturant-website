// Mobile navigation

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("show");
}


// Menu filtering

function filterMenu(category) {

    const foods = document.querySelectorAll(".food-card");
    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");


    foods.forEach(food => {

        if (category === "all") {
            food.style.display = "block";
        }

        else if (food.classList.contains(category)) {
            food.style.display = "block";
        }

        else {
            food.style.display = "none";
        }

    });
}


// Reservation form

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        alert(
            "Thank you, " + name +
            "!\n\nYour table request has been received." +
            "\nDate: " + date +
            "\nTime: " + time +
            "\nGuests: " + guests
        );

        this.reset();
    });


// Prevent selecting past dates

const dateInput = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);