import { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index,setIndex] = useState(0)
  const {name , job , image , text} = people[index]

  const nextPerson = () =>{
    setIndex((currentIndex)=>{
          const newIndex = currentIndex+1;
          if(newIndex > people.length -1){
            return 0
          }
          return newIndex
    })

  }
  
  const prevPerson = () =>{
    setIndex((currentIndex)=>{
      const newIndex = currentIndex-1;
      if(newIndex < 0 ){
        return people.length -1
      }
      return newIndex
})
  }
  const randomPerson =()=>{
       // Generate a random number based on the length of the 'people' array
    let randomNumber = Math.floor(Math.random() * people.length);
    //This line generates a random number between 0 (inclusive) and the length of the people array (exclusive). It uses Math.random() to get a random decimal between 0 and 1, multiplies it by the length of the array, and then rounds down to the nearest integer using Math.floor().
    console.log(randomNumber)
    if(randomNumber === index){
      randomNumber = index + 1 ;
    }
    //This block checks if the generated random number is equal to a specified index (index). If it is, it increments the random number by 1 to ensure that it is not equal to the index.
    setIndex(randomNumber)
  }
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
      <img src={image} alt={name}  className='person-img'/>
      <span className='quote-icon'>
      <FaQuoteRight/>
      </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p  className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={() => prevPerson()}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={()=>nextPerson()}P>
            <FaChevronRight/>
          </button>

        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
         surprise me 
        </button>
      </article>
    </main>
  );
};
export default App;
