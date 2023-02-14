import './FormSubscription.css'
import React,{useState} from 'react';
const FormSubscription = ()=>{
    // const [userTitle, setUserTitle] =useState();
    // const [userDate, setUserDate] =useState();
    // const [userAmount, setUserAmount] =useState();
    const [form,setForm]=useState({userTitle:'', userDate:'', userAmount:'120'})

    const titleChangeHandlerInput = (events) =>{
        // setUserTitle(events.target.value)
        // console.log(userTitle)
        // setForm({...form,userTitle:events.target.value})
        setForm((prevState)=>{
            return{...prevState,userTitle:events.target.value}
        })
        console.log(form)
    }
    const dateChangeHandler =(events) =>{
        // setUserDate(events.target.value)
        // console.log("userDateeeeee" ,userDate)
        // setForm({...form,userDate:events.target.value})
        setForm((prevState)=>{
            return{...prevState,userDate:events.target.value}
        })
        console.log(form)
    }
    const amountChangeHandler =(events) =>{
        // setUserAmount(events.target.value)
        // console.log("userAmount" ,userAmount)
        // setForm({...form,userAmount:events.target.value})
        setForm((prevState)=>{
            return{...prevState,userAmount:events.target.value}
        })
        console.log(form)
    }
    const submitHandler =(events)=>{
        events.preventDefault();
        const Subscription ={title:form.userTitle, amount:form.userAmount, date:form.userDate}
        console.log("on submit",Subscription)
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandlerInput}></input>
                </div>
            </div>

            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label >Date</label>
                    <input type="text" onChange={dateChangeHandler}></input>
                </div>
            </div>

            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                    <label >Amount</label>
                    <input type="text" onChange={amountChangeHandler}></input>
                </div>
            </div>

            <div className='new_subscription_actions'>
                <button type="submit" > Add Subscription </button>
            </div>
        </form>
    )
}
export default FormSubscription;