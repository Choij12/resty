import { useState } from 'react';

import './form.scss';

function Form(props) {

  const [requestData, setRequestData] = useState(null);
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      method: method || 'get',
      url: url,
      body: JSON.parse(requestData),
    };
    props.setFormData(formData);
  }


  const handleSetUrl = e => {
    let { value } = e.target;
    setUrl(value);
  };


  const handleSetMethod = e => {
    let { id } = e.target;
    setMethod(id);
    console.log(id);
  };

  const handleText = e => {
    setRequestData(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input onChange={handleSetUrl} name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label onClick={handleSetMethod} className="methods">
          <span id="get" className = {method === 'get'? 'active':''}>GET</span>
          <span id="post" className = {method === 'post'? 'active':''}>POST</span>
          <span id="put" className = {method === 'put'? 'active':''}>PUT</span>
          <span id="delete" className = {method === 'delete'? 'active':''}>DELETE</span>
        </label>
        <textarea onChange={handleText} ></textarea>
      </form>
    </>
  );
}

export default Form;
