import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './data.jsx'
import { QuestionList } from './data.jsx';

export default function App() {
  const [index, setIndex] = useState(0); 
  const [showMore, setShowMore] = useState(false);
  const listQuestions = QuestionList.map(question =>
    <li key={question.id}>
      <h3>{question.question}</h3>
      <button onClick={handleMoreClick}>
        {showMore ? '-' : '+'}
      </button>
      {showMore && <p>{question.answer}</p>}
      </li> );

function handleMoreClick() {
  setShowMore(!showMore);
}     
  return (
    <div className='flex-container'>
      <div>
        <h2>
          QUESTIONS AND ANSWERS ABOUT LOG IN
        </h2>
      </div>
      <div className='questionlist'>
          {listQuestions}
      </div>
    </div>
  )
}

