import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './App.css';


const Congrats= (props) => {

        if (props.success) {
            return(
            <div data-test='component-congrats' className="alert alert-success">
                
            <span className={classes.span} data-test="congrats-message">
            congradulations! You guessed the word!
            </span>
            </div>
            )      
    } else {
        return (
            <div data-test='component-congrats'>

            </div>
        )
    }

};

Congrats.propTypes={
    success: PropTypes.bool.isRequired
}

export default Congrats;