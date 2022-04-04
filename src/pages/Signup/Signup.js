import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import "./Signup.css";
import { signupReducer } from "../../reducers";
import { signupFunc } from "../../services";
import { useAuth } from "../../contexts";
import { useToast } from "../../custom-hooks";

const Signup = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(signupReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { showToast } = useToast();

  const { firstName, lastName, email, password, confirmPassword } = state;

  const { dispatch: signupDispatch } = useAuth();

  const signupHandler = async (e, userObj) => {
    e.preventDefault();
    const { createdUser: user, encodedToken } = await signupFunc(
      userObj,
      showToast
    );
    if (encodedToken) {
      signupDispatch({ type: "AUTH_SUCCESS", payload: { user, encodedToken } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", encodedToken);
      navigate("/home");
    }
  };

  return (
    <div className="signup-wrapper flex flexJustifyAround flexAlignItemsCenter">
      <img
        className="responsive-image signup-image"
        src="/assets/signup.webp"
        alt="Signup"
      />
      <section className="signup-section flex flexAlignItemsCenter flexJustifyCenter">
        <div className="vertical-card-wrapper signup-card-wrapper box-shadow">
          <div>
            <h2 className="m-4 text-center">SignUp</h2>
          </div>
          <div className="vertical-card-body my-4 mx-3">
            <form id="signup-form" action="submit">
              <fieldset form="signup-form">
                <label htmlFor="first-name-input">First Name</label>
                <input
                  id="first-name-input"
                  type="text"
                  name="firstname"
                  placeholder="Kuldeep"
                  value={firstName}
                  onChange={(e) =>
                    dispatch({ type: "FIRST_NAME", payload: e.target.value })
                  }
                />
                <label htmlFor="last-name-input">Last Name</label>
                <input
                  id="last-name-input"
                  type="text"
                  name="lastname"
                  placeholder="Gupta"
                  value={lastName}
                  onChange={(e) =>
                    dispatch({ type: "LAST_NAME", payload: e.target.value })
                  }
                />
                <label htmlFor="email-input" className="my-3 py-5">
                  Email address
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  placeholder="kuldeep@gmail.com"
                  value={email}
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                />
                <label htmlFor="password-input" className="my-3">
                  Password
                </label>
                <input
                  type="password"
                  id="password-input"
                  name="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                />
                <label htmlFor="-confirm-password-input" className="my-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password-input"
                  name="confirm-password"
                  placeholder="*********"
                  value={confirmPassword}
                  onChange={(e) =>
                    dispatch({
                      type: "CONFIRM_PASSWORD",
                      payload: e.target.value,
                    })
                  }
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
                    I accept all Terms & Conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={password !== confirmPassword}
                  onClick={(e) =>
                    signupHandler(e, { firstName, lastName, email, password })
                  }
                >
                  Create New Account
                </button>
              </fieldset>
            </form>
            {password !== confirmPassword && (
              <p className="password-match my-4">Passwords don't match</p>
            )}
          </div>
          <div className="vertical-card-footer text-center my-5">
            <Link className="text-decoration-none" to="/login">
              Already have an account
              <i className="fa-solid fa-right-long mx-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Signup };
