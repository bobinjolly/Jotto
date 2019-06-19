import checkPropTypes from 'check-prop-types'
import rootReducer from '../reducer';
import { createStore,applyMiddleware } from 'redux';
import { middlewares } from '../configureStore';

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares) (createStore);
    // return createStore(rootReducer,initialState);
    return createStoreWithMiddleware(rootReducer,initialState);

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