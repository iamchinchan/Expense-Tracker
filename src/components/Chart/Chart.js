import React from 'react'
import ChartBar from "./ChartBar"
import "./Chart.css"

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint)=>{
    // console.log("value of dataPoint ",dataPoint.label," is ",dataPoint.value);
    return(dataPoint.value);
  })
  // const totalMaximum = Math.max(...dataPointValues);
  var totalMaximum=0;
  dataPointValues.forEach((data)=>{ 
    totalMaximum+=data;
  })
  // const totalMaximum = Math.sum(dataPointValues);
  console.log("total value is",totalMaximum);
  return (
    <div className="chart">
      {
        props.dataPoints.map((dataPoint)=><ChartBar key={dataPoint.label} label={dataPoint.label} maxValue= {totalMaximum} value={dataPoint.value}/>)
      }
    </div>
  )
}
