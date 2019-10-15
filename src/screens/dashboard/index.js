import React from 'react';
import Stat from './stat';

function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}`
}

const Dashboard = props => {
  return (
    <div>
      <p>Today: {getCurrentDate('-')}</p>
      <Stat />
    </div>
  )
}

export default Dashboard;