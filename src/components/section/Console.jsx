import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
function Console(){
  const {
    register,
    handleSubmit,
    watch, 
    formState : {errors, isSubmitting}
  } = useForm();

  async function onSubmit(data){
    await new Promise((res) => setTimeout(res, 5000))
    console.log(data);
  }
  /////
  const [guestObj, setGuestObj] = useState({
    fullName : "",
    quantity : ""
  });
  const changeGuestNameObj = (e) =>{
    setGuestObj(oldGuest => ({...oldGuest, fullName: errors.target.value}));
  }
return(
<>
  <section>
    <div className="container border border-dark  py-5">
      <div className="row text-center justify-content-center ">
        <div className="col-2 border border-dark py-3">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">D1</button>
          {
            JSON.stringify(guestObj)
          }
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Enter Gaust Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="row">

                    <form onSubmit={handleSubmit(onSubmit)} className="form-control py-3 border border-dark" >
                      
                      <input type="text" placeholder="Enter Gauest Name" 
                      className={errors.fullName ? "input-errors mb-3 form-control" : "mb-3 form-control"} 
                      onChange={(e) => changeGuestNameObj(e)}
                      {
                        ...register("fullName", {
                          required : true,
                        })
                      }
                      />
                      <input type="number" placeholder="Enter Gauest Quantity" 
                      className={errors.quantity ? "input-errors mb-3 form-control" : "mb-3 form-control"} 
                      {
                        ...register("quantity", {
                          required : true,
                        })
                      }
                      />
                      <div className="">
                        <button className="btn btn-success" disabled={isSubmitting} type="submit">{isSubmitting ? "Please Wait" : "Sumbit"}</button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</>
)
}
export default Console;