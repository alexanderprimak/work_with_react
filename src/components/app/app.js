import { Component } from 'react';
import uuid from 'react-uuid';
import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployersList } from '../employers-list/employers-list';
import { EmployersAddForm } from '../employers-add-form/employers-add-form';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Alex', salary: 800, id: uuid(), increase: false, rise: false },
				{ name: 'Dima', salary: 500, id: uuid(), increase: false, rise: false },
				{ name: 'Ola', salary: 300, id: uuid(), increase: true, rise: true },
			],
			searchValue: '',
			filterItem: 'all',
		};
	}
	onDeleteHandle = id => {
		this.setState(({ data }) => ({
			data: data.filter(elem => elem.id !== id),
		}));
	};

	onHandlerIncrease = id => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, increase: !item.increase };
				}
				return item;
			}),
		}));
	};

	onHandlerRise = id => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, rise: !item.rise };
				}
				return item;
			}),
		}));
	};

	searchEmp = (items, value) => {
		if (!value) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(value) > -1;
		});
	};

	searchValueHandler = value => {
		this.setState({
			searchValue: value,
		});
	};

	// Старый способ

	// onHandlerIncrease = id => {
	// 	this.setState(({ data }) => {
	// 		const indexItem = data.findIndex(item => item.id === id);
	// 		const objectFind = data[indexItem];
	// 		const newItem = { ...objectFind, increase: !objectFind.increase };
	// 		const newArray = [
	// 			...data.slice(0, indexItem),
	// 			newItem,
	// 			...data.slice(indexItem + 1),
	// 		];
	// 		return {
	// 			data: newArray,
	// 		};
	// 	});
	// };

	// onHandlerRise = id => {
	// 	this.setState(({ data }) => {
	// 		const indexItem = data.findIndex(item => item.id === id);
	// 		const objectFind = data[indexItem];
	// 		const newItem = { ...objectFind, rise: !objectFind.rise };
	// 		const newArray = [
	// 			...data.slice(0, indexItem),
	// 			newItem,
	// 			...data.slice(indexItem + 1),
	// 		];
	// 		return {
	// 			data: newArray,
	// 		};
	// 	});
	// };

	createItem = (nameItem, salaryItem) => {
		const newObject = {
			name: nameItem,
			salary: salaryItem,
			id: uuid(),
		};
		this.setState(({ data }) => ({
			data: [...data, newObject],
		}));
	};

	// onUpDateHandler = (item, array) => {
	// 	if (item === 'all') {
	// 		return array;
	// 	} else if (item === 'rise') {
	// 		return array.filter(item => item.rise);
	// 	} else if (item === 'salaryBig') {
	// 		return array.filter(item => {
	// 			return item.salary > 1000;
	// 		});
	// 	}
	// };

	onUpDateHandler = (item, array) => {
		switch (item) {
			case 'rise':
				return array.filter(item => item.rise);
			case 'case':
				return array.filter(item => item.salary > 1000);
			default:
				return array;
		}
	};

	onBtnName = value => {
		this.setState({
			filterItem: value,
		});
	};

	render() {
		const { data, searchValue, filterItem } = this.state;
		const prize = data.filter(item => item.increase);
		const visibleData = this.searchEmp(data, searchValue);
		const arrayFilter = this.onUpDateHandler(filterItem, visibleData);
		return (
			<div className='app'>
				<AppInfo allEmployees={data.length} getPrizes={prize.length} />

				<div className='search-panel'>
					<SearchPanel searchHandler={this.searchValueHandler} />
					<AppFilter btnHandler={this.onBtnName} filter={filterItem} />
				</div>

				<EmployersList
					dataUser={arrayFilter}
					onDelete={this.onDeleteHandle}
					onIncrease={this.onHandlerIncrease}
					onRise={this.onHandlerRise}
				/>

				<EmployersAddForm
					createItem={(nameItem, salaryItem) => {
						this.createItem(nameItem, salaryItem);
					}}
				/>
			</div>
		);
	}
}
