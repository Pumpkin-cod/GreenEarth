import React from 'react'

const Carousel = () => {
  return (
    <div>
          <div className="container p-0 m-0">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2017%2F12%2F11%2Fnature-photos-wallpapers_123027676_313.jpg&f=1&nofb=1&ipt=2a7e7b2b04a2b79c6ade6083ddffda293f50ff49d5dceb91cdcab6878decd8cc&ipo=images" class="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FImages-Download-Best-HD-Nature.jpg&f=1&nofb=1&ipt=33e54b8f841bf29d187de4ec06e156ac71003cca2fcf41c0b84e9f74ba92a0f2&ipo=images" class="d-block w-100 img-fluid" alt="..." />
                      </div>
                      <div className="carousel-item">
                          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8PZBLqs1FRKgXPyPN2sD_QHaEo%26pid%3DApi&f=1&ipt=a02d34fbff2ab7098e0002c629732118d327b64332195d66f222ee6d45614b71&ipo=images" class="d-block w-100 img-fluid" alt="..." />
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div> 
    </div>
  )
}

export default Carousel
