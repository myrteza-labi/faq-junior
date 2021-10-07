import './App.css';
import FaqContainer from './components/FaqContainer'; 
import Illustration from './components/Illustration';
import Faq from './components/Faq';
import QuestionBox from './components/QuestionBox';
import React from 'react';

let faqQuestion = [
  "How many team members can I invite?",
  "What is the maximum file upload size?",
  "How do I reset my password?", 
  "Can I cancel my subscription?", 
  "Do you provide additional support?"
]; 

let faqAnswer = [
  "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  "No more than 2GB. All files in your account must fit your allotted storage space.", 
  "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  "Yes! Send us a message and we’ll process your request no questions asked.", 
  "Chat and email support is available 24/7. Phone lines are open during normal business hours."
]; 


class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {

    }
  }



  render(){
  

    return (
      <div className="App">
  
        <FaqContainer>
  
          <Illustration/>
  
          <Faq>
            <QuestionBox answerClassName={"answer active"} question={faqQuestion[0]} answer={faqAnswer[0]}/>
            <QuestionBox answerClassName={"answer"} question={faqQuestion[1]} answer={faqAnswer[1]}/>
            <QuestionBox answerClassName={"answer"} question={faqQuestion[2]} answer={faqAnswer[2]}/>
            <QuestionBox answerClassName={"answer"} question={faqQuestion[3]} answer={faqAnswer[3]}/>
            <QuestionBox answerClassName={"answer"} question={faqQuestion[4]} answer={faqAnswer[4]}/>
          </Faq>
  
        </FaqContainer>
      </div>
    );
  }
  
}

export default App;


/*


    How many team members can I invite?
  You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.

  What is the maximum file upload size?
  No more than 2GB. All files in your account must fit your allotted storage space.

  How do I reset my password?
  Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.

  Can I cancel my subscription?
  Yes! Send us a message and we’ll process your request no questions asked.

  Do you provide additional support?
  Chat and email support is available 24/7. Phone lines are open during normal business hours.


*/