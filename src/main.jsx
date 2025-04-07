import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import { useState, useEffect } from 'react'
// import './App.css'
// const [api, setApi] = useState([])

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/comments/')
//       .then((response) => response.json())
//       .then((data) => setApi(data))
//       .catch((error) => console.log(error))
//   }, []);

{/* <h1>Comments</h1>

<ul>
  {api.slice(1, 20).map((apiFetch) => (
    <li key ={apiFetch.id}>
        <h3>{apiFetch.name}</h3>
        <p>{apiFetch.email}</p>
        <p>{apiFetch.body}</p>
    </li>
  ))}
</ul> */}