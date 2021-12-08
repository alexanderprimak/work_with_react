import './search-panel.css';
import { Component } from 'react';

export class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueSearch: '',
		};
	}

	onChangeHandler = e => {
		const valueSearch = e.target.value;
		this.setState({
			valueSearch,
		});
		this.props.searchHandler(valueSearch);
	};

	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Найти сотрудника'
				value={this.state.valueSearch}
				onChange={this.onChangeHandler}
			/>
		);
	}
}
