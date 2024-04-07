import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const [options, setOptions] = useState({
        dollar: "$",
        pound: "£",
        euro: "€",
        ruppee: "₹"
    });
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
		let value = event.target.value;
		dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }
   const styles = {
	   cover: {
			backgroundColor: "lightgreen",
			color: "white !important",		
	   },
	   label: {
		   color: "white !important"
	   },
	   selected: {
		   backgroundColor: "lightgreen",
		   border: "0rem",
           color: "white"
	   },
	   option: {
		   backgroundColor: "lightgreen",
		   color: "black",
            "option:checked, option:hover":{
                backgroundColor: "white !important",
                color: "black",
            },
         },
   }
    return (
		<div className='alert alert-success' style={{backgroundColor:"lightgreen",color: "white" }}>
		<label className="" style={{backgroundColor:"lightgreen", color:"white"} } htmlFor="currency">Currency </label>
		<select className="currency_style" id="currency" onChange={handleCurrencyChange} style={ styles.selected } >
		    <option value="$" name="$" selected={options.dollar === newCurrency} style={ styles.option }>$ Dollar</option>
		    <option value="£" name="£" selected={options.pound === newCurrency} style={ styles.option }>£ Pound</option>
		    <option value="€" name="€ "selected={options.euro === newCurrency} style={ styles.option }>€ Euro</option>
		    <option value="₹" name="₹" selected={options.ruppee === newCurrency} style={ styles.option }>₹ Rupee</option>
		</select>
		</div>
    );
};
export default Currency;