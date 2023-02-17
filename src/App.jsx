import { useState, useEffect } from 'react'
import './App.css'
import Favorites from './components/favorites';
import Gallery from './components/gallery';

const URL_CATS = "https://api.thecatapi.com/v1/images/search?limit=8";

function App() {

  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites'))
  );
  const [isloading, setIsLoading] = useState(true);

  const handleAddToFavorites = (photo) => {
    if(favorites){
      favorites.find(f => f.id === photo.id) ? '' : setFavorites([...favorites, photo]);
    }
    else{
      setFavorites([photo]);
    } 
  };


  const fetchData = async () =>{
    const response = await fetch(URL_CATS);
      const data = await response.json();

      setPhotos(data);
  }

  useEffect(() => {
    fetchData();
    const favs = JSON.parse(localStorage.getItem("favorites"));
    if(favs){
      setFavorites(favs);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },[favorites])

  
  return (
    <div className="App">

      <Gallery photos={photos} fetchData={fetchData} isloading={isloading} setIsLoading={setIsLoading} handleAddToFavorites={handleAddToFavorites}/>

      <Favorites favorites={favorites} setFavorites={setFavorites}/>

      <footer>
        <span>Made by Leonardo Carrasco.</span> <a href="https://github.com/LeonardoCarrasco" style={{display:'inline-block', color:'#fff'}}>Github <span style={{verticalAlign:'middle'}}><img style={{width:'auto'}} src="https://icongr.am/feather/github.svg?size=20&color=ffffff" alt="" /></span></a>
      </footer>

    </div>
  )
}

export default App
