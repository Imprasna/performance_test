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
            data: [60, 80, 60, 80, 99, 89, 78, 90],
            label: 'Mind Dumps',
            backgroundColor: 'rgb(255 99 132 / 50%)',
            borderColor: 'rgb(255, 99, 132)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            data: [40, 80, 50, 80, 79, 89, 68, 90],
            label: 'Hello Dumps',
            backgroundColor: 'rgb(150 10 130 / 50%)',
            borderColor: 'rgb(150, 10, 130)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            data: [30, 60, 60, 80, 99, 89, 78, 90],
            label: 'Mind Dumps',
            backgroundColor: 'rgb(255 99 132 / 50%)',
            borderColor: 'rgb(255, 99, 132)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            data: [60, 80, 60, 80, 99, 89, 78, 90],
            label: 'Mind Dumps',
            backgroundColor: 'rgb(255 99 132 / 50%)',
            borderColor: 'rgb(255, 99, 132)',
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
}

const config = {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
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