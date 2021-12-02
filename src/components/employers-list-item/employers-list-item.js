import { Component } from 'react';
import './employers-list-item.css';

export class EmployersListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			likeStar: false,
		};
	}

	handlerIncrease = () => {
		this.setState(({ increase }) => ({
			increase: !increase,
		}));
	};

	handlerStar = () => {
		this.setState(({ likeStar }) => ({
			likeStar: !likeStar,
		}));
	};

	render() {
		const { name, salary } = this.props;
		const { increase, likeStar } = this.state;
		const classNames = `list-group-item d-flex justify-content-between ${
			increase ? 'increase' : ''
		} ${likeStar ? 'like' : ''}`;

		return (
			<li className={classNames}>
				<span onClick={this.handlerStar} className='list-group-item-label'>
					{name}
				</span>
				<input
					type='text'
					className='list-group-item-input'
					defaultValue={`${salary}$`}
				/>
				<div className='d-flex justify-content-center align-items-center'>
					<button type='button' className='btn-cookie btn-sm '>
						<i onClick={this.handlerIncrease} className='fas fa-cookie'></i>
					</button>

					<button type='button' className='btn-trash btn-sm '>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-star'></i>
				</div>
			</li>
		);
	}
}
