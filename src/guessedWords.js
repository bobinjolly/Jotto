import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords= (props) => {
    let content;
    if(props.guessedWords.length === 0) {
        content=(
            <span data-test="guess-instructions">
                Try to guess the right word !
            </span>
        );
    } else {
        const gussedWordsRow= props.guessedWords.map((word, index) => (
            <tr data-test="gussed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>

            </tr>
        ))
        content=(
            <div data-test="gussed-words">
            <h3>Gussed words</h3>
            <table className="table table-sm">
                <thead className="thead-light">
                    <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                    </tr>
                </thead>
                <tbody>
                    {gussedWordsRow}
                </tbody>
            </table>

            </div>
        );
    }
    return(
        <div data-test="component-gussed-words">
        {content}
        </div>
    )
};

GuessedWords.propTypes= {
guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired
    })
).isRequired
};


export default GuessedWords;