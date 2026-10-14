import { useState } from 'react'
function App() {
  const [Jokes, setJokes] = useState([])
  const [Joke ,setJoke] = useState('')

  function add()
  {
      setJokes([...Jokes,{Joke}])
      setJoke(' ')
  }
 function API()
 {
  fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data));
 }
  function deletejoke(i)
  {
       setJokes(Jokes.filter((_,index)=>index!==i))
  }

  return (
    <div>
      <h2> JOKE APP</h2>
      <input
        type = "text"
        placeholder = 'Enter the Text'
        value={Joke}
        onChange={(e)=>setJoke(e.target.value)}
      />
      <button onClick={add}>Add</button>

      <h2>List of Jokes</h2>

      {Jokes.map((joke,i)=>
      <p key={i}>
        {joke} {" "}
        <button onClick={()=>deletejoke(i)}>delete</button>
      </p>
      )}
    </div>
  )
}

export default App
