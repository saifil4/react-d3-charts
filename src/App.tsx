import './App.css';
import { LinePlot } from './chart_examples/LinePlot';
import { BarChart } from './chart_examples/BarChart';

function App() {

  return (
    <>
      <LinePlot
        data={[1, 2.3, 3.9, 4, 5.1, 2.3, 7, 8, 9, 10]}
        width={800}
        height={400}
        margin={
          { top: 30, right: 30, bottom: 70, left: 60 }
        } />
      <BarChart
        data={
          [
            {
              "Country": "United States",
              "Value": 12394
            },
            {
              "Country": "Russia",
              "Value": 6148
            },
            {
              "Country": "Germany (FRG)",
              "Value": 1653
            },
            {
              "Country": "France",
              "Value": 2162
            },
            {
              "Country": "United Kingdom",
              "Value": 1214
            },
            {
              "Country": "China",
              "Value": 1131
            },
            {
              "Country": "Spain",
              "Value": 814
            },
            {
              "Country": "Netherlands",
              "Value": 1167
            },
            {
              "Country": "Italy",
              "Value": 660
            },
            {
              "Country": "Israel",
              "Value": 1263
            }
          ]
        }
        width={800}
        height={400}
        margin={
          { top: 30, right: 30, bottom: 70, left: 60 }
        } />
    </>
  )
}

export default App

