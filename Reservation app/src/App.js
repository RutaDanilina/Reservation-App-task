import './App.css';
import {useEffect, useState} from "react";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";


function App() {

    const [boxes, setBoxes] = useState([])
    const [boxSelected, setBoxSelected] = useState(0)

    useEffect(() => {

        let arr = []

        for (let i = 0; i < 28; i++) {
            arr.push(null)
        }

        setBoxes(arr)

    }, [])

    function reserve(color) {
        const boxesUpdate = [...boxes]
        boxesUpdate[boxSelected] = color
        setBoxes(boxesUpdate)
    }

    function cancelReserve() {
        const boxesUpdate = [...boxes]
        boxesUpdate[boxSelected] = null
        setBoxes(boxesUpdate)
    }


    return (

        <div className="App d-flex">

            <Table boxes={boxes} setBoxSelected={setBoxSelected} boxSelected={boxSelected}/>

            <Sidebar reserve={reserve} cancelReserve={cancelReserve} reservationStatus={boxes[boxSelected]}/>


        </div>

    );
}

export default App;