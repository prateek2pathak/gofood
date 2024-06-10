import React from "react";

export default function Crousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" id="crousel">
        <div className="carousel-caption" style={{"zIndex":"10"}}>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Seach"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="carousel-item active" style={{filter:"brightness(30%)"}}>
          <img
            src="https://source.unsplash.com/random/900x700/?pastry"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" style={{filter:"brightness(30%)"}}>
          <img
            src="https://source.unsplash.com/random/900x700/?burger"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" style={{filter:"brightness(30%)"}}>
          <img
            src="https://source.unsplash.com/random/900x700/?pizza"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
