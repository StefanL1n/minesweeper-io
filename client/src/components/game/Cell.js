import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Cell extends Component {
    getCellValue = () => {
        const {value} = this.props;
        if (!value.isRevealed) return value.isFlagged ? "🚩" : null;
        if (value.isMine) return "💣";
        return value.neighbour === 0 ? null : value.neighbour;
    };
    render() {
        const { value, onMouseEnter, onMouseLeave } = this.props;
        let className =
            "cell" +
            (value.isRevealed ? "" : " hidden") +
            (value.isMine ? " is-mine" : "") +
            (value.isFlagged ? " is-flag" : "");
        return (
            <div
                className={className}
                onContextMenu={e=>e.preventDefault()}

            >
            </div>
        );
    }
}

const cellStatus = {
    isRevealed: PropTypes.bool,
    isMine: PropTypes.bool,
    isFlagged: PropTypes.bool,
    neighbour: PropTypes.number
};

Cell.propTypes = {
    value: PropTypes.objectOf(PropTypes.shape(cellStatus)),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};

export default Cell;