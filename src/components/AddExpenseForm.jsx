import React, { useContext, useRef, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
	const [cost, setCost] = useState('');

    const inputRef = useRef();

    const onSubmit = (e) =>{
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name, 
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm col-lg-4">
                    <label htmlFor="name">Name</label>
                    <input
                        required="required" 
                        type="text"
                        className="form-control"
                        id="name"
                        ref={inputRef}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="col-sm col-lg-4">
                    <label htmlFor="cost">Cost</label>
                    <input 
                        required="required"
                        type="number" 
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={(e)=>setCost(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary" onClick={()=>inputRef.current.focus()}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
