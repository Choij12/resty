import {useState, useEffect} from 'react';

import './app.scss';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Results';

function App(){

  const [data, setData] = useState(null);
  const [formData, setFormData]= useState({});
  let [loading, setLoading] = useState(false);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect ( async () => {
      setLoading(true);
      axios({
        method: formData.method,
        url: formData.url,
        body: formData.body
      }).then(response =>{
        setLoading(false);
        setData(response);
      }).catch(error=>{
        console.log(error);
        setLoading(false);
        console.log('useless');
      })
    },[formData]);

    return (
      <>
        <Header />
        <div>Request Method: {formData.method}</div>
        <div>URL: {formData.url}</div>
        <Form setFormData={setFormData} 
         />
        <Results data={data} loading={loading}  />
        <Footer />
      </>
    );
  }


export default App;