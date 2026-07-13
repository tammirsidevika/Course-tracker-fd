import "./Cards.css";

function Cards() {
  return (
    <>
      <h1 className="welcome">Welcome!</h1>

      <div className="cards">

        <div className="card blue">
          <h2>4586</h2>
          <p>Total Courses</p>
        </div>

        <div className="card purple">
          <h2>587</h2>
          <p>Active Courses</p>
        </div>

        <div className="card yellow">
          <h2>57</h2>
          <p>Launched Courses</p>
        </div>

        <div className="card red">
          <h2>57</h2>
          <p>Due Courses</p>
        </div>

      </div>
    </>
  );
}

export default Cards;