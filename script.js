function navToCourse1() {
    window.location.href = "https://icons8.com/icon/set/photo-and-video/small"
}

const ctx = document.getElementById('myChart').getContext('2d')

//animation delay
let delayed;

//gradient fill
let gradient = ctx.createLinearGradient(0,0,0,400)
gradient.addColorStop(0, 'rgba(58,123,213,1)')
gradient.addColorStop(1, 'rgba(0,210,255, 0.3)') 

const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

const data = {
    labels,
    datasets: [
    {
        data:[4,2,1,4,5,3,0],
        label: 'Hours',
        fill: true,
        backgroundColor: gradient,
        borderColor: '#000',
        pointBackgroundColor: '#fff',
        tension: 0.3,
    },
],
}

const config = {
    type: 'line',
    data: data,
    options: {
        hitRadius: 20,
        hoverRadius: 10,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true
            },

            delay: (context) => {
                let delay = 0
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100
                }
                return delay
            },

        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + 'hrs'
                    },

                },
            },
        },
    },
}

const myChart = new Chart(ctx, config)

