// BarChart.tsx

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BarChartProps {
    data: number[];
    labels: string[];
    width?: number;
    height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, width, height }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            // Destroy the existing chart if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Year of experience',
                                data: data,
                                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        indexAxis : "y",
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "Skills",
                                },
                                ticks :{
                                    color : "white"
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Year of experience",
                                },
                                beginAtZero: true,
                                ticks :{
                                    color : "white"
                                }
                            },
                            
                        },
                        plugins:{
                            legend: {
                                labels: {
                                    color: 'white'
                                }
                            },
                        }
                    },
                });
            }
        }
    }, [data, labels]);

    return <canvas ref={chartRef} width={width} height={height}></canvas>;
};

export default BarChart;
