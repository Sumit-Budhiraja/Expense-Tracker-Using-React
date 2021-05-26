import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const chart =(props)=>{
    const dataPointValues=props.dataPoints.map((dataPoint)=>dataPoint.value);// We here map the value of the dataPoint object in a seperate array
    console.log(dataPointValues);
    const maxValue=Math.max(...dataPointValues);//since max requires multiple values we are using spread operator
    console.log(maxValue);

    return <div className='chart'>
    {props.dataPoints.map((dataPoint)=>
    <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        max={maxValue}
        label={dataPoint.label}
    />
    )}
    </div>
}

export default chart;