import './app-filter.css';
import uuid from 'react-uuid';

export const AppFilter = ({ btnHandler, filter }) => {
	const btnData = [
		{ name: 'all', label: 'Все сотрудники' },
		{ name: 'rise', label: 'На повышение' },
		{ name: 'salaryBig', label: 'З/П больше 1000$' },
	];

	const buttons = btnData.map(({ name, label }) => {
		const activeBtn = name === filter;
		const classActive = activeBtn ? 'btn-light' : 'btn-outline-light';
		return (
			<button
				onClick={() => {
					btnHandler(name);
				}}
				className={`btn ${classActive}`}
				type='button'
				key={uuid()}
			>
				{label}
			</button>
		);
	});
	return <div className='btn-group'>{buttons}</div>;
};
