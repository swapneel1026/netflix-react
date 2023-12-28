import {
  applyActionCode,
  updateEmail,
  updateProfile,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Profile = () => {
  const navigator = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayNameUpdate");
    updateProfile(auth.currentUser, {
      displayName: displayName,
    }).then(() => {
      navigator("/home");
    });
  };
  return (
    <div className="w-full h-screen bg-black">
      <h1 className="text-white">Profile</h1>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          name="displayNameUpdate"
          defaultValue={auth?.currentUser?.displayName}
          required
        />
        {/* <input type="email" name="emailUpdate" /> */}
        <button className="text-white" type="submit">
          Update Info
        </button>
      </form>
    </div>
  );
};
export default Profile;
