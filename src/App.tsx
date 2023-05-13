import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Error } from './components/Error';

function App() {
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string | string[]>('');

  useEffect(() => {
    axios.get<string>('https://omriruvio-zany-space-chainsaw-jq7j5pv67w9fq74q-3333.preview.app.github.dev')
      .then(res => setTitle(res.data))
      .catch(err => {
        console.log(err);
        // setError(`Connection error. Possible CORS Error, set server port to public in codespace ports. Otherwise check the server is running on port 3333`)
        setError(['Connection Error.', 'Possible CORS Error.', 'Set server port to public in codespace ports.', 'Otherwise check the server is running on port 3333.']);
      })
  }, []);

  console.log(import.meta.env.VITE_ENV_BASEURL);

  const handleClick = async () => {
    const res = await axios.get<{ message: string }>('https://omriruvio-zany-space-chainsaw-jq7j5pv67w9fq74q-3333.preview.app.github.dev/api/data');
    setData((data) => [...data, res.data.message]);
  };

  return (
    <div>
      <Error text={error} />
      <h1>{title}</h1>
      <button onClick={handleClick}>Make Request</button>
      {data.map((d, i) => <div key={i}>{d}</div>)}
    </div>
  );
}

export default App;
