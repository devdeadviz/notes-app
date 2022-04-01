import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper box-shadow flex m-5">
      <section className="flex flexCol flexJustifyBetween ">
        <h1 className="landing-page-main-heading">
          <span>My</span>Notes
        </h1>
        <div>
          <h3 className="landing-page-heading my-2">Meet your modern</h3>
          <h4 className="landing-page-sub-heading my-2">Note Taking App</h4>
          <p className="landing-page-description my-5">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div className="flex flexCol">
          <Link to="/signup">
            <button type="button" class="btn btn-primary join-now-btn m-2">
              Join Now
            </button>
          </Link>
          <Link
            to="/login"
            className="text-decoration-none landing-page-footer-link pl-2 my-2"
          >
            Already have an account?
          </Link>
        </div>
      </section>
      <img
        className="responsive-image landing-page-image"
        src="/assets/landingpage.png"
        alt="Landing Page"
      />
    </div>
  );
};

export { LandingPage };
