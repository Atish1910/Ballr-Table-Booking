import { useState } from "react";
import { useForm } from "react-hook-form";

function Console() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  async function onSubmit(data) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(data);

    // Store data in localStorage
    localStorage.setItem("guestDetails", JSON.stringify(data));

    // Change button color and disable it
    setIsFormSubmitted(true);
  }

  return (
    <>
      <section>
        <div className="container border border-dark py-5">
          <div className="row text-center justify-content-center">
            <div className="col-2 border border-dark py-3">
              <button
                type="button"
                className={`btn ${isFormSubmitted ? "btn-danger" : "btn-primary"}`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                disabled={isFormSubmitted}
              >
                D1
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Enter Guest Details
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="form-control py-3 border border-dark"
                        >
                          <input
                            type="text"
                            placeholder="Enter Guest Name"
                            className={`mb-3 form-control ${errors.fullName ? "input-errors" : ""}`}
                            {...register("fullName", { required: true })}
                          />
                          <input
                            type="number"
                            placeholder="Enter Guest Quantity"
                            className={`mb-3 form-control ${errors.quantity ? "input-errors" : ""}`}
                            {...register("quantity", { required: true })}
                          />
                          <div>
                            <button className="btn btn-success" disabled={isSubmitting} type="submit">
                              {isSubmitting ? "Please Wait" : "Submit"}
                            </button>
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
  );
}

export default Console;
