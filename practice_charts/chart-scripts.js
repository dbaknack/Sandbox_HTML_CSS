document.addEventListener('DOMContentLoaded', function () {
    // ==============================
    // Bar Chart
    // ==============================
    const barCtx = document.getElementById('barChart1').getContext('2d');
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Disk Usage (GB)',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    new Chart(barCtx, barConfig);

    // ==============================
    // Line Chart
    // ==============================
    const lineCtx = document.getElementById('lineChart1').getContext('2d');
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'CPU Usage (%)',
            data: [30, 45, 60, 50, 70, 55, 65],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
    
			lineTension: 0.3
        }]
    };

    const lineConfig = {
        type: 'line',
        data: lineData,
	animations: {
		tension: {
			duration: 1000,
			easing: 'linear',
			from: 1,
			to: 0,
			loop: true
		}
		},
        options: {
			layout: {
				padding: {
                	left: 10
            	}
			},
            scales: {
                y: {
                  min: 0,
        max: 100
                }
            }
        }
    };
    new Chart(lineCtx, lineConfig);
});
