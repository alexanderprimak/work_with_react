import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployersList } from '../employers-list/employers-list';
import { EmployersAddForm } from '../employers-add-form/employers-add-form';

export function App() {
	const data = [
		{ name: 'Alex', salary: 800, id: 1 },
		{ name: 'Dima', salary: 500, id: 2 },
		{ name: 'Ola', salary: 300, id: 3 },
	];
	return (
		<div className='app'>
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployersList dataUser={data} />

			<EmployersAddForm />
		</div>
	);
}
