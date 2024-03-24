import './App.css';
import { LinePlot } from './components/lineplot';

function App() {

  return (
    <>
      <LinePlot
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        width={800}
        height={400}
        margin={
          { top: 30, right: 30, bottom: 70, left: 60 }
        } />
      <LinePlot
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        width={800}
        height={400}
        margin={
          { top: 30, right: 30, bottom: 70, left: 60 }
        } />
    </>
  )
}

export default App

