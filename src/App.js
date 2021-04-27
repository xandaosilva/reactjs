import logo from './logo.svg';
import GithubImage from './github.jpg';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" required/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img src={GithubImage} className="responsive rounded-circle" height="200px" alt="" />
        <h1 className="pt-5">
          <a href="https://github.com/xandaosilva" target="_new">
            Alexandre Rogério
          </a>
        </h1>
        <h3>Uberlândia</h3>
        <p>
          <a href="https://www.facebook.com/alexandre.rogerio.3" target="_new" className="text-info">
            https://www.facebook.com/alexandre.rogerio.3
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
