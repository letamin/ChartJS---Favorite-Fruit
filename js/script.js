const myForm = document.querySelector('#pollForm');
const ctx = document.getElementById('myChart').getContext('2d');
const myData = [
    {
        option: "Banana",
        votes: 11,
        color: "rgba(255, 99, 132, 0.75)"
    },
    {
        option: "Apple",
        votes: 8,
        color: "rgba(54, 162, 235, 0.75)"
    },
    {
        option: "Lemon",
        votes: 11,
        color: "rgba(36, 36, 36, 0.75)"
    },
    {
        option: "Avocado",
        votes: 5,
        color: "rgb(255, 159, 64, 0.75)"
    },
    {
        option: "Grape",
        votes: 3,
        color: "rgba(75, 192, 192, 0.75)"
    },
    {
        option: "Mango",
        votes: 8,
        color: "rgba(255, 206, 86, 0.75)"
    },
    {
        option: "Other",
        votes: 10,
        color: "rgba(153, 102, 255, 0.75)"
    }
];

myForm.addEventListener('submit', formSubmit)
function formSubmit(event) {
    event.preventDefault();
    const pollInput = document.querySelector('.poll-radio-input:checked');
    if (pollInput) {
        const inputValue = pollInput.value;
        myData.find(element => element.option === inputValue).votes++;
        myChart.data.datasets[0].data = myData.map(element => element.votes);
        myChart.update();
    }
}

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: myData.map(element => element.option),
        datasets: [{
            label: '# of votes',
            data: myData.map(element => element.votes),
            backgroundColor: myData.map(element => element.color),
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        aspectRatio: 2,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Favorite Fruit',
            padding: 20
        }
    }
});