import { useState } from 'react';
import './employers-list-item.css';

export const EmployersListItem = ({ name, salary, increase }) => {
	const [increaseState, increaseSet] = useState(increase);

	const handlerCookie = () => {
		increaseState ? increaseSet(false) : increaseSet(true);
	};

	return (
		<li
			className={`list-group-item d-flex justify-content-between ${
				increaseState ? 'increase' : ''
			}`}
		>
			<span className='list-group-item-label'>{name}</span>
			<input
				type='text'
				className='list-group-item-input'
				defaultValue={`${salary}$`}
			/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' className='btn-cookie btn-sm '>
					<i onClick={handlerCookie} className='fas fa-cookie'></i>
				</button>

				<button type='button' className='btn-trash btn-sm '>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	);
};
