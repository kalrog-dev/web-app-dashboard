//Alert banner
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

//Line graph
const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

//Update line chart
const hourly = document.getElementById("hourly-li");
const daily = document.getElementById("daily-li");
const weekly = document.getElementById("weekly-li");
const monthly = document.getElementById("monthly-li");

let newData = {
    labels: [
            //Hourly
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
            "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
            //Daily
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
            "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
            "25", "26", "27", "28", "29", "30"],
            //Weekly
            ["1", "2", "3", "4", "5", "6", "7"],
            //Monthly
            ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
    ],
    datasets: [
        {
            //Hourly
            data: [4, 2, 3, 4, 1, 3, 2, 3, 2, 4, 1, 3, 2, 3, 4, 2, 3, 1, 2, 1, 4, 3, 1, 2],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        },
        {
            //Daily
            data: [17, 21, 14, 18, 17, 25, 22, 19, 21, 24, 20, 18, 23, 21, 27,
            24, 21, 23, 17, 19, 20, 25, 23, 28, 21, 18, 19, 24, 22, 25],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        },
        {
            //Weekly
            data: [120, 160, 130, 200, 150, 170, 130],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        },
        {
            //Monthly
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        },
    ]
}

const updateChart = (filter) => {
    trafficChart.data.labels = newData.labels[filter];
    trafficChart.data.datasets[0].data = newData.datasets[filter].data;
    trafficChart.update();
}

hourly.addEventListener('click', () => {
    hourly.classList.add("active");
    daily.classList.remove("active");
    weekly.classList.remove("active");
    monthly.classList.remove("active");
    updateChart(0);
});

daily.addEventListener('click', () => {
    hourly.classList.remove("active");
    daily.classList.add("active");
    weekly.classList.remove("active");
    monthly.classList.remove("active");
    updateChart(1);
});

weekly.addEventListener('click', () => {
    hourly.classList.remove("active");
    daily.classList.remove("active");
    weekly.classList.add("active");
    monthly.classList.remove("active");
    updateChart(2);
});

monthly.addEventListener('click', () => {
    hourly.classList.remove("active");
    daily.classList.remove("active");
    weekly.classList.remove("active");
    monthly.classList.add("active");
    updateChart(3);
});

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    lineTension: 0.4,
    fill: true,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

//Bar graph
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//Doughnut chart
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    // maintainAspectRatio: true,
    // responsive: true,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//Message section
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

//Save settings to local storage
const emailCheckbox = document.getElementById("email-checkbox");
const publicCheckbox = document.getElementById("public-checkbox");
const timezone = document.getElementById("timezone");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

save.addEventListener('click', () => {
    localStorage.setItem("Email", String(emailCheckbox.checked));
    localStorage.setItem("Public", String(publicCheckbox.checked));
    localStorage.setItem("Timezone", timezone.selectedIndex);
});

cancel.addEventListener('click', () => {
    localStorage.clear();
    emailCheckbox.checked = false;
    publicCheckbox.checked = false;
    timezone.selectedIndex = 0;
});

//Update on reload
emailCheckbox.checked = localStorage.getItem("Email") === "true";
publicCheckbox.checked = localStorage.getItem("Public") === "true";
timezone.selectedIndex = Number(localStorage.getItem("Timezone"));

//Autocomplete (Source: https://www.w3schools.com/howto/howto_js_autocomplete.asp)
let users = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("userField"), users);

//Notifications
const notif = document.getElementById("show-notif");
const bell = document.getElementById("bell-icon");
const notifDot = document.getElementById("notifications");
let viewed = false;

bell.addEventListener("click", () => {
    if (notif.style.display == "flex") {
        notif.style.display = "none";
        viewed = true;
    } else {
        notif.style.display = "flex";
    }

    if (viewed) {
        notifDot.style.display = "none";
    }
})

