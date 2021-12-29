const cts = document.querySelector('#myChart').getContext('2d');

const gradientOne = cts.createLinearGradient(0, 0, 0, 400);
gradientOne.addColorStop(0, 'rgba(249, 211, 113, 1)');
gradientOne.addColorStop(1, 'rgba(249, 211, 113, 0.3)');

const gradientTwo = cts.createLinearGradient(0, 0, 0, 400);
gradientTwo.addColorStop(0, 'rgba(244, 115, 64, 1)');
gradientTwo.addColorStop(1, 'rgba(244, 115, 64, 0.3)');

const gradientThree = cts.createLinearGradient(0, 0, 0, 400);
gradientThree.addColorStop(0, 'rgba(239, 47, 136, 1)');
gradientThree.addColorStop(1, 'rgba(239, 47, 136, 0.3)');

const gradientFour = cts.createLinearGradient(0, 0, 0, 400);
gradientFour.addColorStop(0, 'rgba(136, 67, 242, 1)');
gradientFour.addColorStop(1, 'rgba(136, 67, 242, 0.3)');

// rgb(249, 211, 113)rgb(244, 115, 64)rgb(239, 47, 136)rgb(136, 67, 242)

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
            data: [10, 25, 33, 45, 48, 55, 65, 75, 80, 88, 90, 29],
            label: 'Professional',
            backgroundColor: gradientOne,
            // backgroundColor: 'rgb(255 99 132 / 15%)',
            borderColor: 'rgb(249, 211, 113)',
            fill: true,
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
        // {
        //     data: [40, 85, 50, 80, 79, 89, 58, 90, 60, 19, 59, 29],
        //     label: 'Hello Dumps',
        //     backgroundColor: gradientTwo,
        //     // backgroundColor: 'rgb(150 10 130 / 15%)',
        //     borderColor: 'rgb(244, 115, 64)',
        //     fill: true,
        //     // data: [0, 10, 5, 2, 20, 30, 45],
        // },
        // {
        //     data: [30, 60, 20, 85, 59, 89, 98, 10, 60, 19, 59, 50],
        //     label: 'Kick Dumps',
        //     backgroundColor: gradientThree,
        //     // backgroundColor: 'rgb(110 10 13 / 15%)',
        //     borderColor: 'rgb(239, 47, 136)',
        //     fill: true,
        //     // data: [0, 10, 5, 2, 20, 30, 45],
        // },
        {
            data: [90, 70, 40, 30, 99, 49, 78, 90, 40, 99, 59],
            label: 'Behavioral',
            backgroundColor: gradientFour,
            // backgroundColor: 'rgb(205 105 13 / 15%)',
            borderColor: 'rgb(136, 67, 242)',
            fill: true,
            // data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        
        scales: {
                y: {
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

const myChart = new Chart(cts, config);

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