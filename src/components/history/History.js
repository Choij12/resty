import './history.scss'

function History (props){

  const handleClick = e => {
    let { id } = e.target;
    let raw = props.arrData[id];
    const action = {
      type: 'UPDATE_FORM_DATA',
      payload: raw
    }
    props.setFormData(action);
    console.log('id----->',raw.method,raw.url);
  };

  return (
    <aside className = 'history'>
    <ul>
      {props.arrData.map((singleItem,idx)=>(
      <li  >
        <span>{singleItem.method}</span> <button id={idx} onClick ={handleClick} >{singleItem.url}</button>
        </li>
    ))}
    </ul>
    </aside>
  );
}

export default History;