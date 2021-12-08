import { Component } from 'react';
import './employers-add-from.css';

export class EmployersAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		};
	}

	onValueChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	onSubmit = e => {
		e.preventDefault();
		const { name, salary } = this.state;
		if (name !== null && name !== '' && salary !== null && salary !== '') {
			this.props.createItem(name, salary);
			this.setState({
				name: '',
				salary: '',
			});
		}
	};

	render() {
		const { name, salary } = this.state;
		return (
			<div className='app-add-form'>
				<h3>Добавьте нового сотрудника</h3>
				<form className='add-form d-flex'>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='Как его зовут?'
						value={name}
						name='name'
						onChange={this.onValueChange}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='З/П в $?'
						value={salary}
						name='salary'
						onChange={this.onValueChange}
					/>

					<button
						onClick={this.onSubmit}
						type='submit'
						className='btn btn-outline-light'
					>
						Добавить
					</button>
				</form>
			</div>
		);
	}
}
