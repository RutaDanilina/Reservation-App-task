import {useRef} from 'react';

const Sidebar = ({reserve, cancelReserve, reservationStatus}) => {
    const colorRef = useRef()


    return (
        <div className="sidebar">

            {reservationStatus ?
                <div className="d-flex flex-column">
                    <button onClick={cancelReserve}>Cancel Reservation</button>
                </div> :

                <div className="d-flex flex-column">
                    <label for="input-color">Choose color</label>
                    <input ref={colorRef} type="color" id='input-color' />
                    <button onClick={() => reserve(colorRef.current.value)}>Make Reservation</button>
                </div>
            }

        </div>
    );
};

export default Sidebar;