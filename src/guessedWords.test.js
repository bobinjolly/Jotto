import React from 'react';
import Enzyme,{shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr, checkPropTyps}   from './test/testUtils';

import GuessedWords from './guessedWords';
Enzyme.configure({adapter: new EnzymeAdapter});


const defaultProps= {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
    // guessedWords: 'test'

};

const setup= (props={}) => {
    const setUpProps= {...defaultProps, ...props};
    return shallow(<GuessedWords {...setUpProps}/>)
};


test('does not throw warning with expected props', () => {
    checkPropTyps(GuessedWords, defaultProps);

} );

describe('if threre are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper= setup({guessedWords: []});
    })
    test('renders without error', () => {
        const component= findByTestAttr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1);
    } );
    test('renders instructions to guess a word', () => {
        const instructions= findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    } );
} ); 
describe('if threre are words guessed', () => {
    let wrapper;
    const guessedWords= [
        {guessedWord: 'apple', letterMatchCount: 3},
        {guessedWord: 'mango', letterMatchCount: 1},
        {guessedWord: 'fruit', letterMatchCount: 2}
    ];
    beforeEach(() => {
        wrapper= setup({guessedWords})
    })
    test('renders without error', () => {
        const component=findByTestAttr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordNode= findByTestAttr(wrapper, 'gussed-words');
        expect(guessedWordNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const gussedWordNodes= findByTestAttr(wrapper, 'gussed-word');
        expect(gussedWordNodes.length).toBe(guessedWords.length);
    });
} );