import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const CreaUser = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 mt-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                    className={`form-control ${errors.name && `is-invalid`}`}
                    id="name"
                    placeholder="Enter name"
                    name="name"
                  />
                  {errors.name && (
                    <p className="invalid-feedback">Name is required</p>
                  )}
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    type="email"
                    className={`form-control ${errors.email && `is-invalid`}`}
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  {errors.email && (
                    <p className="invalid-feedback">{errors.email?.message}</p>
                  )}
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile:
                  </label>
                  <input
                    {...register("mobile", { required: true })}
                    aria-invalid={errors.mobile ? "true" : "false"}
                    type="number"
                    className={`form-control ${errors.mobile && `is-invalid`}`}
                    id="mobile"
                    placeholder="Enter mobile"
                    name="mobile"
                  />
                  {errors.mobile && (
                    <p className="invalid-feedback">Mobile is required</p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreaUser;
