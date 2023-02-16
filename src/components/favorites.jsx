
const Favorites = ({favorites, setFavorites}) => {

    const handleRemoveFromFavorites = (photo) => {
        setFavorites(favorites.filter((item) => item.id !== photo.id));
      };
    
      const handleRemoveAll = () =>{
        setFavorites([]);
      }

    return (
        <div className='fav-container'>
        <h2>Favoritos</h2>
        <div className="favorites">
          {favorites.map((photo) => (
            <div key={photo.id} className="photo" >
              <div className='img-container'><img src={photo.url} alt="photo" /></div>
              <button onClick={() => handleRemoveFromFavorites(photo)}>
                Eliminar de favoritos
              </button>
            </div>
          ))}
        </div>
        <div className='btn-container'>
          <button className='btn-more' onClick={handleRemoveAll}>Eliminar Todos</button>
        </div>
      </div>
    )
}

export default Favorites