/* eslint-disable react/prop-types */
import React from 'react';

import arrow from '../../../../images/icons/arrow.svg';
import './style.scss';

export default function DashboardOption({id, iconsState, handleClick, icon, arrowEnable, name, options, path}) {

	return(
		<div id={id} className='iconHolder' >
			<div className='selector' onClick={(event) => handleClick(path, event)}>
				<img src={icon} className='icon'></img>
				<p>{name}</p>
				<img src={arrowEnable ? arrow : ''} className={`arrow-${iconsState[id] && options ? 'open' : 'closed' }`}></img>
			</div>
			{ options &&
				<div className={`dashboard-option-${iconsState[id] ? 'open' : 'closed' }`}>
					{options.map((e, i) => {
						return (
							<div className='dash-option' key={i} onClick={() => handleClick(e.path)}>
								<p>{e.name}</p>
							</div>
						);
					})}
				</div> 
			}
		</div>
	);
}
