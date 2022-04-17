import { Sidebar } from "../../components";
import { useAuth } from "../../contexts";
import "./Profile.css";

const Profile = () => {
  const {
    state: { user },
  } = useAuth();

  return (
    <section className="profile-wrapper flex">
      <Sidebar showBtn={false} />
      <section className="profile-main-section flex flexCol flexAlignItemsCenter pt-2">
        <h1>Hi, {`${user.firstName} ${user.lastName}`} </h1>
        <h1 className="my-4">You can view your profile details here!</h1>
        <img src="/assets/profile-image.webp" alt="Profile Page" />
      </section>
    </section>
  );
};

export { Profile };
