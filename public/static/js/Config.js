"use strict";

export const Config = (Answers) => {
    return {
        Config_Chart_js: {
            type: 'radar',
            data: {
                labels: [
                  'Commitment',
                  'Openness',
                  'Respect',
                  'Focus',
                  'Courage'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: Answers,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, 
                {
                  label: 'My Second Dataset',
                  data: [0, 1, 2, 3, 5],
                  fill: true,
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderColor: 'rgb(0, 0, 0, 0)',
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        enabled: false,
                    },
                    decimation: {
                        enabled: false,
                    },
                    legend: {
                        display: false,
                        title: {
                            display: false,
                        }
                    },
                    subtitle: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                },
                hover: {
                    intersect: false
                },
                interaction: {
                    display: false
                },
                scale: {
                    r: {
                        ticks: {
                            stepSize: 1,
                            display: false
                        }
                    }
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            }
        },
    };
};
