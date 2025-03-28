import Navbar from "./components/Navbar";
import Console from "./components/section/Console";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

function App(){
  return(
    <>
      {/* <Navbar></Navbar> */}
      <section>
        <div className="container">
          <div className="row text-center">
            <h1 className="">Table Booking Apps</h1>
          </div>
          <Console></Console>
        </div>
      </section>
    </>
  )
}

export default App;