import React, { useState } from "react";
import 'app.css';

const App = () => {
  const [limit, setLimit] = useState('')

  return (
    <div id='main'>
      <h2>Developer Challenge</h2>
      <p>By <a href="https://linkedin.com/in/julie-exel">Julie Exel</a></p>
      <br />

      <div class='container'>
        <label 
          for={limit} 
          type='input' 
          text='Enter a numberical value'></label>
        <input 
          type='text'
          onChange={(e) => setLimit(e.target.value)} 
          value={limit} 
          name={limit} />
      </div>
    </div>
  )
}

export default App;