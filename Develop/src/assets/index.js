const events = document.querySelectorAll('.event');

events.forEach(event => {
    const date = dayjs(event.dataset.date).format('MMM, ddd D. h:mm A');
    const dateElement = event.querySelector('.date');
    dateElement.innerHTML = date;
});

$('#list-btn').click(function() {
    localStorage.setItem("activeButton", "list-btn");
    window.location.href = "./list.html";
});

$("#complete-btn").click (function() {
    localStorage.setItem("activeButton", "complete-btn");
    window.location.href = "./completed.html";
});

$(document).ready(function() {
    var activeButton = localStorage.getItem("activeButton");
    if (activeButton) {
        $('#list-btn, #complete-btn').removeClass("bg-green-300 border-solid border-2 border-sky-500 rounded-lg hover:bg-green-400");
        $("#" + activeButton).addClass("bg-green-300 border-solid border-2 border-sky-500 rounded-lg hover:bg-green-400");
    }
    $('#list-btn, #complete-btn').hover(function() {
        $(this).addClass("hover:border-solid border-2 border-sky-500");
    }, function() {
        $(this).removeClass("hover:border-solid border-2 border-sky-500");
    });
});

// Time


