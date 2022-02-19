import { useState, useEffect, useReducer } from 'react';

import './app.scss';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';
import History from './components/history/History';

function App() {

  const initialState = {
    data: {},
    formData: {},
    loading: false,
    arrCalls:[]
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_DATA':
        return {
          ...state,
          data: { ...action.payload }
        }
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: { ...action.payload }
        }
      case 'LOADING':
        return {
          ...state,
          loading: action.payload
        }
      case 'UPDATE_HISTORY':
        return {
          ...state,
          arrCalls: [...state.arrCalls, action.payload]
        }
      default:
        return state;
    }
  }
 
  let [state, dispatch] = useReducer(reducer, initialState);

  let loadingTrueAction = {
    type: 'LOADING',
    payload: true
  }
  let loadingFalseAction = {
    type: 'LOADING',
    payload: false
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(loadingTrueAction);
    axios({
      method: state.formData.method,
      url: state.formData.url,
      body: state.formData.body
    }).then(response => {
      let action = {
        type: 'UPDATE_DATA',
        payload: response
      }
      dispatch(loadingFalseAction);
      dispatch(action);
    }).catch(error => {
      console.log(error);
      dispatch(loadingFalseAction);
    })
    if(state.formData.method){
      let history ={
        type: 'UPDATE_HISTORY',
        payload: state.formData
      }
      dispatch(history);
    }
  }, [state.formData]);
  console.log(typeof state.arrCalls)
  return (
    <>
      <Header />
      <Form setFormData={dispatch}/>
      <History arrData = {state.arrCalls} setFormData={dispatch}/>
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}


export default App;