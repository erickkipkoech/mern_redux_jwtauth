import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { toast } from "react-toastify";
import Loader from "../helpers/Loader.jsx";
import { setCredentials } from "../../slices/authSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form onSubmit={submitHandler} style={{ width: "23rem" }}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign up
                </h3>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example18">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className="form-control form-control-lg"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className="form-control form-control-lg"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example28">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password_confirmation"
                    value={confirmPassword}
                    className="form-control form-control-lg"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>
                {isLoading && <Loader />}
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>

                <p>
                  Already have an account?
                  <Link to="/login" className="link-info">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterScreen;
