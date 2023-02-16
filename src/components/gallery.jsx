
const Gallery = ({photos, fetchData, isloading, setIsLoading, handleAddToFavorites}) => {

 

    return (
        <div className='gallery-container'>
        <h1>Galería de Fotos</h1>
          <div className="photos" >
            {photos.map((photo) => (
              <div key={photo.id} className="photo">
                <div className='img-container'>
                    {isloading && <div className="spinner"></div>}
                    <img src={photo.url} alt="photo" onLoad={()=> setIsLoading(false)} style={{display: isloading ? 'none' : 'block'}}/>
                </div>
                <button onClick={() => handleAddToFavorites(photo)}>
                  Agregar a favoritos
                </button>
              </div>
            ))}
          </div>
        <div className='btn-container'>
          <button className='btn-more' onClick={fetchData}>Mostra mas </button>
        </div>
      </div>
    )
}

export default Gallery