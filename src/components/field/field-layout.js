import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';
import { Component } from 'react';

export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;

		return (
			<div className="grid grid-cols-3 my-5 border border-black ">
				{field.map((cellPlayer, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => handleCellClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
};
