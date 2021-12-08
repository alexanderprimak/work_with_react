import './employers-list-item.css';

export function EmployersListItem({
	name,
	salary,
	onDelete,
	increase,
	rise,
	onHandlerRise,
	onHandlerIncrease,
}) {
	const classNames = `list-group-item d-flex justify-content-between ${
		increase ? 'increase' : ''
	} ${rise ? 'like' : ''}`;

	return (
		<li className={classNames}>
			<span onClick={onHandlerRise} className='list-group-item-label'>
				{name}
			</span>
			<input
				type='text'
				className='list-group-item-input'
				defaultValue={`${salary}$`}
			/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' className='btn-cookie btn-sm '>
					<i onClick={onHandlerIncrease} className='fas fa-cookie'></i>
				</button>

				<button onClick={onDelete} type='button' className='btn-trash btn-sm '>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	);
}
