import './App.css';
import Header from './components/Header';
import MusicCard from './components/MusicCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://v1.nocodeapi.com/jaya/spotify/rppKVVdabxGxuKhY/search?q=${input}&type=track`
        );
        setItems(res.data.tracks.items); 
        console.log(res.data.tracks.items)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }; 

    fetchData(); 
  }, [input]); 

  return (
    <div className="App">
      <Header setInput={setInput} input={input}/>
      <div className='songs'>
        {items.map((item)=>{
          return (
            <MusicCard item={item} key={item.id}/>
          )
        })}

      </div>
    </div>
  );
}

export default App;
