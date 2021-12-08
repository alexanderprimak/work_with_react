import './employers-list.css';
import { EmployersListItem } from '../employers-list-item/employers-list-item';

export const EmployersList = ({ dataUser, onDelete, onIncrease, onRise }) => {
	const elements = dataUser.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployersListItem
				onDelete={() => onDelete(id)}
				onHandlerIncrease={() => onIncrease(id)}
				onHandlerRise={() => onRise(id)}
				key={id}
				{...itemProps}
			/>
		);
	});
	return <ul className='app-list list-group'>{elements}</ul>;
};
