/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import InputText from '../text/index.jsx';
import './style.scss';
import sortDown from '../../../images/icons/sortdownicon.svg';

export default function InputSelect({ items, label, placeholder, linkName, handlerClickLink, errors, register, onChange, onMouseUp, value, disabled }) {
	const [item, setItem ] = useState('');
	const [hideList, setHideList] = useState(true);
	useEffect(() => {
	},[register]);

	return(
		<>
			<div 
				className='select-container' 
				placeholder={placeholder} 
				onClick={() => setHideList(!hideList)}
				onChange={onChange}
				onMouseLeave={() => setHideList(true)}
			>
				<InputText value={value || item} label={label} {...register} disabled={disabled} onChange={({target}) => {setItem(target.value);}}></InputText>
				<img src={ sortDown} className='sort'></img>
				<div className={ hideList ? 'hide' :'list-contructor'} onMouseUp={onMouseUp} onClick={() => setHideList(true)} onMouseLeave={() => setHideList(true)}>
					{
						items.map((e, i) => {
							return <li key={i} onClick={() => setItem(e)}><span>{e}</span></li>;
						})
					}
				</div>

				{ errors && errors[register.name] &&  <span className="error-message">{errors[register.name].message}</span> }
				{ linkName && <p className="link" onClick={() => handlerClickLink()}>{ linkName }</p>}
			</div>
		</>
	);
}
