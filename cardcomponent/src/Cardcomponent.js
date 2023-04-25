import './Cardcomponet.css';

function Cardcomponet(props){
    return(
        <div className="Main-div">
        <div className="card">
            <img src={props.address} alt="person_img"className="card-img"/>
            <h6 style={{margin:"10px 5px"}}>{props.subtitle}</h6>
            <h3 style={{margin:"5px"}}>{props.name}</h3>
            <p>{props.content}</p>
            <button style={{margin:"10px 5px "}}className="card-btn" onClick={props.btnFunction}>See More..</button>
        </div>
        </div>
    );
}
export default Cardcomponet;