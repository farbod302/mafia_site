"use client"

import Helper from "@container/helper";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  
import { Line } from 'react-chartjs-2';

const Charts = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Filler,
        Title,
        Tooltip,
        Legend
      );

    const [chartData, setChartData] = useState({
        ram: Array(10).fill(0),
        cpu: Array(10).fill(0),
        users: Array(10).fill(0),
        games: Array(10).fill(0),
    })

    useEffect(() => {

        const socket = io(Helper.BASE_URL)
        socket.emit("monitoring", { token: localStorage.getItem("token") })

        socket.on("new_data", ({data}) => {
            console.log(data);
            const { online_games, online_users, ram_usage, cpu_usage } = data
            setChartData(prv => {
                const prv_data = {...prv}
                prv_data.games.shift()
                prv_data.games.push(online_games)
                prv_data.users.shift()
                prv_data.users.push(online_users)
                prv_data.ram.shift()
                prv_data.ram.push(ram_usage)
                prv_data.cpu.shift()
                prv_data.cpu.push(cpu_usage)
                return prv_data
            })
        })
    }, [])


    useEffect(()=>{
        console.log(chartData);
    },[chartData])





    return (
        <div>
            <div className="charts">
                <div className="title">
                    مصرف منابع
                </div>

                <div className="info">
                    <div>
                        CPU (%):{chartData.cpu.at(-1)}
                    </div>
                    <div>
                        RAM (%):{chartData.ram.at(-1)}
                    </div>
                </div>

                <Line
                options={
                    {
                        animation:{
                            duration:0
                        },
                        backgroundColor:"gray"
                    }
                }
                    datasetIdKey='id'
                    data={{
                        labels: Array(10).fill("").map((e, i) => i + 1),
                        datasets: [
                            {
                                id: 1,
                                label: 'CPU Usage',
                                data: chartData.cpu.map(e=>e),
                                borderColor: 'red',
                                transition:0
                            },
                            {
                                id: 2,
                                label: 'RAM usage',
                                data: chartData.ram.map(e=>e),
                                borderColor: 'rgb(53, 162, 235)',
                                transition:0

                            },
                            {
                                id: 3,
                                label: '',
                                data: chartData.ram.map(e=>100),
                                borderColor: 'rgb(53, 162, 235,0)',
                                transition:0

                            },
                        ],
                    }}
                />

            </div>
            <div className="charts">
                <div className="title">
                   کاربران
                </div>

                <Line
                options={
                    {
                        animation:{
                            duration:0
                        },
                        backgroundColor:"gray"
                    }
                }
                    datasetIdKey='id'
                    data={{
                        labels: Array(10).fill("").map((e, i) => i + 1),
                        datasets: [
                            {
                                id: 1,
                                label: 'online users',
                                data: chartData.users.map(e=>e),
                                borderColor: 'red',
                                transition:0
                            },
                            {
                                id: 2,
                                label: 'Online games',
                                data: chartData.games.map(e=>e),
                                borderColor: 'rgb(53, 162, 235)',
                                transition:0

                            },
                            
                        ],
                    }}
                />

            </div>
        </div>
    );
}

export default Charts;