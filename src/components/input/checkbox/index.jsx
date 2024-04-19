/* eslint-disable react/prop-types */
import React from 'react';

export default function Checkbox({ errors, register, value, id, className, label, onClick ,checked, ...props }) {
	return(
		<div className={className}>
			<input id={id} type="checkbox" {...register} { ...props } checked={checked} value={value} onClick={onClick}/>
			<label htmlFor={id}>{ label }</label>
			{ errors && errors[register.name] &&  <p className="error-message">{errors[register.name].message}</p> }
		</div>
	);
}