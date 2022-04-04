import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginFunc } from "../../services";
import "./Login.css";
import { useAuth } from "../../contexts";
import { useToast } from "../../custom-hooks";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useAuth();

  const navigate = useNavigate();

  const { showToast } = useToast();

  const loginHandler = async (e, userObj) => {
    e.preventDefault();
    if (userObj.email !== "" || userObj.password !== "") {
      const { foundUser: user, encodedToken } = await loginFunc(
        userObj,
        showToast
      );
      if (encodedToken) {
        dispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", encodedToken);
        navigate("/home");
      }
    } else {
      showToast("Fill all the fields!", "warn");
    }
  };

  return (
    <div className="login-wrapper flex flexJustifyAround flexAlignItemsCenter">
      <img
        className="responsive-image login-image"
        src="/assets/login.webp"
        alt="Login"
      />
      <section className="login-section">
        <div className="vertical-card-wrapper login-card-wrapper box-shadow">
          <div>
            <h2 className="m-4 text-center">Login</h2>
          </div>
          <div className="vertical-card-body my-4 mx-3">
            <form action="#">
              <label htmlFor="email-input" className="my-3 py-5">
                Email address
              </label>
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="kuldeep@gmail.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
              <label htmlFor="password-input" className="my-3">
                Password
              </label>
              <input
                type="password"
                id="password-input"
                name="name"
                placeholder="*********"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
              <div className="form-options flex flexJustifyBetween flexAlignItemsCenter mt-3 mb-5">
                <label htmlFor="remember">
                  <input
                    className="mr-2"
                    type="checkbox"
                    id="remember"
                    name="rememberme"
                    value="RememberMe"
                  />
                  Remember me
                </label>
                <Link className="text-decoration-none" to="#">
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                onClick={(e) =>
                  loginHandler(e, {
                    email: user.email,
                    password: user.password,
                  })
                }
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-primary submit-btn mt-4"
                onClick={(e) =>
                  loginHandler(e, {
                    email: "adarshbalika@gmail.com",
                    password: "adarshBalika123",
                  })
                }
              >
                Login as Guest
              </button>
            </form>
          </div>
          <div className="vertical-card-footer text-center my-5">
            <Link className="text-decoration-none" to="/signup">
              Create new Account <i className="fa-solid fa-right-long mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Login };
