import './results.scss';
import JSONPretty from "react-json-prettify";

function Results(props) {

  return (
    <section>
      {props.loading ? <h1>LOADING IN PROGRESS!</h1>
        : 
    <div>
      <pre>
    <label> "Headers" :</label>
     {props.data ? <JSONPretty json={props.data.headers}/> : null}
     </pre>
     <pre data-testid="data">
       <label>"Response" :</label>
       {props.data ? <JSONPretty json = {props.data.data}/> : null}
       </pre>
       </div>
      }
    </section>
  );
}


export default Results;