//Line chart
const trafficCanvas = document.getElementById('traffic-chart');

// Data of the currently displayed line chart. This is monthly traffic by default
const trafficData = {
  labels: [
    '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', 
    '27-3', '4-10', '11-17', '18-24', '25-31'
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1
  }]
};

const trafficOptions = {
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

const trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// Data to display one of four different line charts
const newData = {
  labels: [
    // Hourly line chart
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    // Daily line chart
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 
    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', 
    '26', '27', '28', '29', '30'],
    // Weekly line chart
    ['1', '2', '3', '4', '5', '6', '7'],
    // Monthly line chart
    ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', 
    '27-3', '4-10', '11-17', '18-24', '25-31']
  ],
  datasets: [
    {
      // Hourly line chart
      data: [4, 2, 3, 4, 1, 3, 2, 3, 2, 4, 1, 3, 2, 3, 4, 2, 3, 1, 2, 1, 4, 3, 1, 2],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1
    },
    {
      // Daily line chart
      data: [
        17, 21, 14, 18, 17, 25, 22, 19, 21, 24, 20, 18, 23, 21, 27,
        24, 21, 23, 17, 19, 20, 25, 23, 28, 21, 18, 19, 24, 22, 25
      ],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1
    },
    {
      // Weekly line chart
      data: [120, 160, 130, 200, 150, 170, 130],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1
    },
    {
      // Monthly line chart
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1
    }
  ]
}

// Add event listener to the chart navigation
document.querySelector('.traffic-nav').addEventListener('click', handleNavClick);

function handleNavClick({ target }) {
  // If the event bubbled up from an li element
  if (target.tagName === 'LI') {
    // Get an array of list items and apply the active class to the target li
    [...this.children].forEach(li => li.classList.remove('active'));
    target.classList.add('active');

    // Get the index of the target li and display the associated chart
    const index = [...this.children].indexOf(target);
    updateChart(index);
  }
}

// Update which line chart is being displayed. This also rewrites the trafficData
const updateChart = (filter) => {
  trafficChart.data.labels = newData.labels[filter];
  trafficChart.data.datasets[0].data = newData.datasets[filter].data;
  trafficChart.update();
}

//Bar graph
const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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

const dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

//Doughnut chart
const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
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

const mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});