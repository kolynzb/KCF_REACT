import React from "react";

const MovieCard = (props) => {
  return (
    <>
      <div class="container">
        <div class="cellphone-container">
          <div class="movie">
            <div class="menu">
              <i class="material-icons"></i>
            </div>
            <div class="movie-img" style={{ backgroundImage: `url(${props.posterimg})`}}></div>
            <div class="text-movie-cont">
              <div class="mr-grid">
                <div class="col1">
                  <h1>{props.name}</h1>
                  <ul class="movie-gen">
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid summary-row">
                <div class="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div class="col2">
                  <ul class="movie-likes">
                    <li>
                      <i class="material-icons">&#xE813;</i>124
                    </li>
                    <li>
                      <i class="material-icons">&#xE813;</i>3
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid">
                <div class="col1">
                  <p class="movie-description">{props.overview}</p>
                </div>
              </div>
              <div class="mr-grid actors-row">
                <div class="col1">
                  <p class="movie-actors">
                    Matthew McConaughey, Anne Hathaway, Jessica Chastain
                  </p>
                </div>
              </div>
              <div class="mr-grid action-row">
                <div class="col2">
                  <div class="watch-btn">
                    <h3>
                      <i class="material-icons">&#xE037;</i>WATCH TRAILER
                    </h3>
                  </div>
                </div>
                <div class="col6 action-btn">
                  <i class="material-icons">&#xE161;</i>
                </div>
                <div class="col6 action-btn">
                  <i class="material-icons">&#xE866;</i>
                </div>
                <div class="col6 action-btn">
                  <i class="material-icons">&#xE80D;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://dribbble.com/geehm" target="_blank">
        <img
          class="dribbble-link"
          src="https://image.flaticon.com/icons/png/512/124/124037.png"
        />
      </a>
    </>
  );
};

export default MovieCard;
