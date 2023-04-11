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
const hourly = document.getElementById("hourly");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

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