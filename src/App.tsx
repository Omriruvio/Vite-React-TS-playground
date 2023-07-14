import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart } from 'recharts';
import { data } from './data/mockdata';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <>
      <div style={{ width: '100vw', height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={false} type="number" domain={[1689252216290, 1689252603440]}/>
          <YAxis />
          <Tooltip />
          {/* <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" connectNulls={false}/> */}
          <Bar dataKey="value" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div style={{ width: '100vw', height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={false} type="number" domain={[1689252216290, 1689252603440]}/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" connectNulls={false}/>
        </AreaChart>
      </ResponsiveContainer>
      </div>
      </>
    );
  }
}
