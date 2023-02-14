import logo from './logo.svg';
import './App.css';
import Nikhil from './customNikhil/Nikhil';
import Container from './Templates/Container';
import NewSubscription from './customNikhil/NewSubscription/NewSubscription';

const App = () => {
  let nikhil =[
    {
      id : "1",
      date:(new Date('2021','03','23')), 
      title:"Monthly Subscription",
      amount: '125.60'
    },
    {
      id : "2",
      date:(new Date('2020','05','13')), 
      title:"Annual Subscription",
      amount: '1225.60'
    },
    {
      id : "3",
      date:(new Date('2019','08','03')), 
      title:"Week Subscription",
      amount: '40.60'
    },

  ]
  // let date= (new Date('2021','03','23'));
  //   let title="Monthly Subscription";
  //   let amount= '125.60';
  return (
    <Container>
      <header>
        <NewSubscription/>
      <Nikhil date={nikhil[0].date} passedTitle={nikhil[0].title} passedAmount={nikhil[0].amount} />
      <Nikhil date={nikhil[1].date} passedTitle={nikhil[1].title} passedAmount={nikhil[1].amount} />
      <Nikhil date={nikhil[2].date} passedTitle={nikhil[2].title} passedAmount={nikhil[2].amount} />
      </header>
    </Container>
  );
}

export default App;
