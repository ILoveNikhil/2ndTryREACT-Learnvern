import './Nikhil.css';
import DateFormate from './DateFormate';
import Container from '../Templates/Container';
// import react,{useState} from 'react';
import React,{useState} from 'react';

const Nikhil = (props) => {  
    const [title, setTitle] = useState(props.passedTitle) 
    // let title = props.passedTitle
    const onClickhandler = () =>{
        // title ="Changed Title";
        setTitle("Changed Title")
        console.log(title)
    }
    return(
        <Container className="div_Main subscription " >      
        
        <DateFormate date={props.date}/>
        <h2 className="div_Title common subscription_title" >{title} </h2>
        <div className="div_Amount common" >{props.passedAmount} </div>
        <button type="button" id="changeTitleButton" onClick={onClickhandler}>Change Title</button>
        </Container>
    )
}
export default Nikhil;