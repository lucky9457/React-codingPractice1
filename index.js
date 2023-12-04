const element = (
  // Write your code here.
  <div className="main">
    <h1 className="mainHead">Congratulations</h1>
    <div class="profile">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p class="descript">
        Vishnu Institute of Computer Education and Technology Bheemavaram
      </p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
