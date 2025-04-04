/* eslint-disable no-unused-vars */
import React from 'react'
import './Stats.css'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Stats() {

     const  barChartData = [
      {
        name: 'salads',
        Sale: 50,
        
      },
      {
        name: 'Veg',
        Sale: 23,
      },
      {
        name: 'Desert',
        Sale: 98,
      },
      {
        name: 'Pasta',
        Sale: 39,
        
      },
      {
        name: 'Noodls',
        Sale: 48,
      },
      {
        name: 'Cake',
        Sale: 38,
      },
      {
        name: 'Rolls',
        Sale: 63,
      },
  ];


    const lineChartData = [
        {
          name: '2020',
          loss: 400,
          profit: 240,
          amt: 2400,
        },
        {
          name: '2019',
          loss: 3000,
          profit: 1398,
          amt: 2210,
        },
        {
          name: '2020',
          loss: 2000,
          profit: 9800,
          amt: 2290,
        },
        {
          name: '2021',
          loss: 2780,
          profit: 3908,
          amt: 2000,
        },
        {
          name: '2022',
          loss: 1890,
          profit: 4800,
          amt: 2181,
        },
        {
          name: '2023',
          loss: 2390,
          profit: 3800,
          amt: 2500,
        },
        {
          name: '2024',
          loss: 3490,
          profit: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ORDERS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>13</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DELIVERED</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>13</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PENDING</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>0</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Revenue</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>4200$</h1>
            </div>
            <h3 className='charts-hrading'>STATS - ANALYSIS</h3>
        </div>

        <div className='charts'>
            
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sale" fill="#f2832f" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={lineChartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Line type="monotone" dataKey="profit" stroke="purple" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="loss" stroke="red" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Stats
