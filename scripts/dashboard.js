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
                display: false
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
