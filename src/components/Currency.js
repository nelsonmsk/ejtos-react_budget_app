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
			color: "white",		
	   },
	   label: {
		   color: "white"
	   },
	   selected: {
		   backgroundColor: "lightgreen",
		   border: "0rem",
	   },
	   option: {
		   backgroundColor: "lightgreen",
		   color: "white",
            "&:checked, &:hover":{
                backgroundColor: "white",
                color: "black",
            },
         },
   }
    return (
		<div className='alert alert-success' style={styles.cover }>
		<label className="text-success" style={ styles.label } htmlFor="currency">Currency </label>
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