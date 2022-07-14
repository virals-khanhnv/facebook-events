import React from 'react';
import { useDispatch } from 'react-redux';
import { openNavbarSaveChange } from '../../redux/Action';

function CatchChangeToSave() {
    // Custom hook
    const dispatch = useDispatch();

    // Func Handler
    const handleCloseNavbarSavechange = () => {
        dispatch(openNavbarSaveChange(false))
    }
    
    return (
        <div className='main_save'>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 mt-0 h1"> 
                    Facebook Events
                </span>
                <div>
                    <button type="button" onClick={() => handleCloseNavbarSavechange()} className="btn btn-secondary">Close</button>
                    <button type="button" onClick={() => handleCloseNavbarSavechange()} className="btn btn-primary ml-2">Save</button>
                </div>
            </nav>
        </div>
    )
}

export default CatchChangeToSave
