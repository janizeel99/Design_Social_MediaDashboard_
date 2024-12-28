import React from 'react'
import 
{ BsFillArchiveFill,  BsPeopleFill, BsHandThumbsUp, BsChat, BsPersonAdd, BsPersonDown}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Page A',
          unfollow: 230,
          follow: 500,
          amt: 2400,
        },
        {
          name: 'Page B',
          unfollow: 320,
          follow: 890,
          amt: 2210,
        },
        {
          name: 'Page C',
          unfollow: 590,
          follow: 2300,
          amt: 2290,
        },
        {
          name: 'Page D',
          unfollow: 648,
          follow: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          unfollow: 2360,
          follow: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          unfollow: 2990,
          follow: 5500,
          amt: 2500,
        },
        {
          name: 'Page G',
          unfollow: 1480,
          follow: 6110,
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
                    <h3>LIKES</h3>
                    <BsHandThumbsUp className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMMENTS</h3>
                    <BsChat className='card_icon'/>
                </div>
                <h1>58</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>FOLLOW</h3>
                    <BsPersonAdd className='card_icon'/>
                </div>
                <h1>6110</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>UNFOLLOW</h3>
                    <BsPersonDown className='card_icon'/>
                </div>
                <h1>1480</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
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
                <Bar dataKey="follow" fill="#8884d8" />
                <Bar dataKey="unfollow" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
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
                <Line type="monotone" dataKey="follow" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="unfollow" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home