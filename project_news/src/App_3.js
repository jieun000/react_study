import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  const onClick = async() => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=270d937ac8794256bd8bddc4f367d9dd',
      )
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
