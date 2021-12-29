const cts = document.querySelector('#myChart').getContext('2d');

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
  
const data = {
    labels,
    datasets: [
        {
            data: [60, 80, 60, 80, 99, 89, 78, 90, 60, 19, 59, 29],
            label: 'Mind Dumps',
            backgroundColor: 'rgb(255 99 132 / 50%)',
            borderColor: 'rgb(255, 99, 132)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            data: [40, 85, 50, 80, 79, 89, 58, 90, 60, 19, 59, 29],
            label: 'Hello Dumps',
            backgroundColor: 'rgb(150 10 130 / 50%)',
            borderColor: 'rgb(150, 10, 130)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            data: [30, 60, 20, 85, 59, 89, 98, 10, 60, 19, 59, 50],
            label: 'Kick Dumps',
            backgroundColor: 'rgb(110 10 13 / 50%)',
            borderColor: 'rgb(110, 10, 13)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            data: [90, 70, 40, 30, 99, 49, 78, 90, 40, 99, 59],
            label: 'Go Dumps',
            backgroundColor: 'rgb(205 105 13 / 50%)',
            borderColor: 'rgb(205, 105, 13)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
}

const config = {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    callback: function (value)
                    {
                        return value + "%"
                    }
                }
            }
        }
    }
}

const myChart = new Chart(cts, config)

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };