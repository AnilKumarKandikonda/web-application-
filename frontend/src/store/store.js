import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/Login/reducers/loginReducer';
import comingSoonReducer from '../pages/ComingSoon/reducers/comingSoonReducer';
import contactPageReducer from '../pages/Contact/reducers/contactReducer';
import faqReducer from '../pages/Faq/reducers/faqReducer';
import networkReducer from '../pages/Network/reducers/networkReducer';
import registerReducer from '../pages/Register/reducers/registerReducer';
import userResume from '../pages/Resume/reducers/resumeReducer';
import blogReducer from '../pages/PersonalBlog/reducers/blogReducer';

const rootReducer = combineReducers({
    userLogin: loginReducer,
    comingSoon: comingSoonReducer,
    contactPage: contactPageReducer,
    faqPage: faqReducer,
    networkPage: networkReducer,
    registerPage: registerReducer,
    userResume: userResume,
    blog: blogReducer
});

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});