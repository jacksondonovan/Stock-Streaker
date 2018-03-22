import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Trading Meets Fantasy Sports!</h1>
          <p className="lead">Welcome to Stock Streaker. The game is simple, build a winning streak by select one stock per day that you think will close higher. If you complete an entire month can win cash money!</p>
          <hr className="my-4"/>
          <p>Sign In to keep your record going. Put your predictions to the test, risk free!</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
          </p>
        </div>
        <div className="container">
          <div className="row col-sm-12">
            <figure className="col-sm-4">
              <img src="https://www.gannett-cdn.com/-mm-/403ef77445f4b28964c33232ce35da47f3525530/c=0-32-580-358&r=x803&c=1600x800/local/-/media/2017/12/05/USATODAY/usatsports/getty-stock-market-data_large.jpg"/>
              <p>This will be a puppy picture for now</p>
            </figure>
            <figure className="col-sm-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKol5VQ3TYKVpq3fwXq1GnbgUMhl_HSKWMcTPWYxLNRMO4NLArA"/>
              <p>This will be a puppy picture for now</p>
            </figure>
            <figure className="col-sm-4">
              <img src="https://pbs.twimg.com/profile_images/536276221399556096/VwWMfh-f.png"/>
              <p>This will be a puppy picture for now</p>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}
