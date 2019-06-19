import checkPropTypes from 'check-prop-types'
import rootReducer from '../reducer';
import { createStore } from 'redux';

export const storeFactory = (initialState) => {
    return createStore(rootReducer,initialState)
};




export const findByTestAttr= (wrapper, val) => {
return wrapper.find(`[data-test="${val}"]`);
};

export const checkPropTyps= (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'props',
        component.name
    );
    expect(propError).toBeUndefined();
}