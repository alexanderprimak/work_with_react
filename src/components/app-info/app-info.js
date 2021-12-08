import './app-info.css';

export const AppInfo = ({ allEmployees, getPrizes }) => {
	return (
		<div className='app-info'>
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {allEmployees}</h2>
			<h2>Премию получат: {getPrizes}</h2>
		</div>
	);
};
