import { Tab } from "bootstrap"

function Table(){
    return(
        <>
        <div className="row text-center">
            <div className="col-lg-4">
                <div className="border py-5 border-dark border">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Table 1</button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="border py-5 border-dark border">
                    <button className="btn btn-success">Table 2</button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="border py-5 border-dark border">
                    <button className="btn btn-primary">Table 3</button>
                </div>
            </div>
        </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Table;