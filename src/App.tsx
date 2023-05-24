import axios from 'axios';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Error } from './components/Error';
import { forwardUrl } from './config';
import _ from 'lodash';


function App() {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string | string[]>('');
  const [ignoredResponses, setIgnoredResponses] = useState<string[]>([]);

  useEffect(() => {
    axios.get<string>(forwardUrl)
      .then(res => setTitle(res.data))
      .catch(err => {
        console.log(err);
        // setError(`Connection error. Possible CORS Error, set server port to public in codespace ports. Otherwise check the server is running on port 3333`)
        setError(['Connection Error.', 'Possible CORS Error.', 'Set server port to public in codespace ports.', 'Otherwise check the server is running on port 3333.']);
      })
  }, []);

  const currentRequest = useRef<string | null>(null);
  const makeRequest = _.debounce(async () => {
    const requestId = _.uniqueId();
    currentRequest.current = requestId;
    try {
      const res = await axios.get<{ message: string }>(`${forwardUrl}/api/data`);
      if (currentRequest.current === requestId) {
        setData((data) => [...data, res.data.message]);
      } else {
        setIgnoredResponses((ignoredResponses) => [...ignoredResponses, res.data.message]);
      }
    }
    catch (err) {
      console.log(err);
      setData((data) => [...data, 'Error']);
    }
  }, 1000);

  const handleClick = () => {
    makeRequest();
  };

  return (
    <div>
      <Error text={error} />
      <h1>{title}</h1>
      <button onClick={handleClick}>Make Request</button>
      <div style={{ position: 'fixed', bottom: 0, left: 0, padding: '1rem', border: '1px solid white', color: 'white' }}>
        <h2 style={{ marginTop: '2rem' }}>Processed Responses</h2>
        {data.map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div style={{ position: 'fixed', bottom: 0, right: 0, padding: '1rem', border: '1px solid white', color: 'white' }}>
        <h2>Ignored Responses</h2>
        {ignoredResponses.map((d, i) => <div key={i}>{d}</div>)}
      </div>

    </div>
  );
}

export default App;
