let blankLabels = []
for (let i = 1; i <= 40; i++) {
    blankLabels.push("")
}
const data = {
    labels: blankLabels,
    datasets: [{
        label: 'Energy consumption',
        data: [90, 93, 84, 85, 82, 85, 86, 80, 78, 79, 78, 80, 85, 88, 86, 97, 95, 100, 97, 90, 89, 90, 75, 80, 78, 60, 63, 63, 64, 55, 60, 58, 58, 57, 60, 55, 58, 57, 50, 40],
        fill: true,
        backgroundColor: "rgba(85, 139, 47, 0.2)",
        borderColor: 'rgb(85, 139, 47)',
        pointRadius: 0
    }]
};
const lineChart = document.querySelector("#main-linechart");
new Chart(lineChart, {
    type: "line",
    data: data,
    options: {
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                },
                beginAtZero: true,
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


const filterItems = document.querySelectorAll(".filter-items p");
filterItems.forEach(i => {
    
    i.addEventListener("click", event => {
        filterItems.forEach(j => {
            j.id = "";
        })
        event.target.id = "active-filter";
        
    })
})


const barChart = document.querySelector("#bar-chart");
const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
        label: "Renewable", 
        data: [83, 75, 63, 40, 72, 80, 76], 
        backgroundColor: "rgb(85, 139, 47)", 
        borderRadius: 3
        },
        {
        label: "Fossil",
        data: [17, 25, 37, 60, 28, 20, 24],
        backgroundColor: "rgba(85, 139, 47, 0.2)",
        borderRadius: 3
        }]
}
new Chart(barChart, {
    type: "bar",
    data: barChartData,
    options: {
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                },
                beginAtZero: true,
                ticks: {
                    display: false
                }
            }
        },
        
    }
})