document.addEventListener('DOMContentLoaded', function() {
    const metricsData = [
        { title: 'Total Revenue', value: '$406,411.29', color: 'text-green-600' },
        { title: 'Total Jobs Avg', value: '$620', color: 'text-black-600' },
        { title: 'Tickets Created', value: '655', color: 'text-black-600' },
        { title: 'Tickets Scheduled', value: '735', color: 'text-black-600' },
        { title: 'Outstanding Amount', value: '$110,448.8', color: 'text-red-600' },
        { title: 'Memberships Sold', value: '105', color: 'text-black-600' },
        { title: 'Jobs Completed', value: '436', color: 'text-black-600' },
        { title: 'Total Canceled', value: '65', color: 'text-black-600' }
    ];

    const metricsContainer = document.getElementById('metrics-container');
    metricsData.forEach(metric => {
        const metricDiv = document.createElement('div');
        metricDiv.className = 'p-4 border rounded ';
        metricDiv.innerHTML = `
            <div class="font-bold text-xl ${metric.color}">${metric.value}</div>
            <div>${metric.title}</div>
        `;
        metricsContainer.appendChild(metricDiv);
    });

    function setupChart(chartId, chartType, labels, data, label, backgroundColor, borderColor) {
        const ctx = document.getElementById(chartId).getContext('2d');
        return new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Revenue for November 2019',
                            align: 'middle'
                        }
                    }
                },
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    const jobLocationData = [50000, 40000, 30000, 25000, 20000, 15000, 10000];
    const jobLocationLabels = ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds', 'Other'];
    setupChart('job-location-chart', 'bar', jobLocationLabels, jobLocationData, '', 'rgba(100, 290, 192, 0.9)', 'rgba(100, 290, 192, 9)');

    const jobTypeData = [70000, 55000, 35000, 30000, 25000, 20000, 15000];
    const jobTypeLabels = ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'];
    setupChart('job-type-chart', 'bar', jobTypeLabels, jobTypeData, '', 'rgba(100, 290, 192, 0.9)', 'rgba(100, 290, 192, 9)');
});

