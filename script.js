const date1Input = document.getElementById("date1");
const date2Input = document.getElementById("date2");
const dayNames = document.querySelectorAll(".day-name");

date1Input.addEventListener("change", highlightDays);
date2Input.addEventListener("change", highlightDays);

function highlightDays() {
    const date1 = new Date(date1Input.value);
    const date2 = new Date(date2Input.value);

    const day1 = date1.getDay();
    const day2 = date2.getDay();

    dayNames.forEach((day, index) => {
        day.classList.remove("green", "orange");
        if (index === day1 && index === day2) {
            day.classList.add("green");
        } else if (index === day1 || index === day2) {
            day.classList.add("orange");
        }
    });
}

