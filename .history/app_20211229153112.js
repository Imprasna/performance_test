const cts = document.querySelector('#myChart').getContext('2d');

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
  
const data = {
    labels,
    dataSet: [
        {
            data: [150, 80, 60, 80, 99, 89, 78, 90],
            label: 'Mind Dumps'
        },
    ],
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
}

const 

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