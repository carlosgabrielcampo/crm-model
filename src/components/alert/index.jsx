/* eslint-disable react/prop-types */
import React from 'react';
import sucess from '../../images/icons/successicon.svg';
import warning from '../../images/icons/warningicon.svg';
import error from '../../images/icons/erroricon.svg';
import './style.scss';
export default function Alert({className, message, onClick}) {
	return(
		<div className='alertContainer' onClick={onClick}>
			<div className={className && className + ' alert'}>
				<img 
					src={className === 'success' && sucess 
        || className === 'warning' && warning
				|| className === 'error' && error
					} />
				<p>{message}</p>
			</div>
		</div>
	);
}