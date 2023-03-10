const DateFormate = (props) => {
    const month = props.date.toLocaleString('default', {month: 'long'})
    const day = props.date.toLocaleString('default', {day: '2-digit'})
    const year= props.date.getFullYear();
    return(
        <div>
        <div>{day} </div>
        <div>{month} </div>
        <div>{year} </div>
        </div>
    )
}
export default DateFormate;