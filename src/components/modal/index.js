/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
export default function Modal({ className, children }) {
	return(
		<div className='modalContainer'>
			<div className='modalContent'>
				<div className={className}>
					{ children }
				</div>
			</div>
		</div>
	);
}  