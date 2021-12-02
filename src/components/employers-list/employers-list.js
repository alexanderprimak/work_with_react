import './employers-list.css';
import { EmployersListItem } from '../employers-list-item/employers-list-item';

export const EmployersList = ({ dataUser }) => {
	const elements = dataUser.map(item => {
		const { id, ...itemProps } = item;
		return <EmployersListItem key={id} {...itemProps} />;
	});
	return <ul className='app-list list-group'>{elements}</ul>;
};
 