import Navbar from "./components/Navbar";
import Table from "./components/table";

function App(){
  return(
    <>
      <Navbar></Navbar>
      <section>
        <div className="container">
          <div className="row text-center">
            <h1 className="">Ballr Table Booking Apps</h1>
          </div>
          <Table></Table>
        </div>
      </section>
    </>
  )
}

export default App;