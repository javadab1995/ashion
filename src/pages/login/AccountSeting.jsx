import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./userSlice";
import { toast } from "react-toastify";
import Button from "../../ui/Button";

const AccountSeting = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(userInfo ? userInfo.name : "");

  const handleSave = () => {
    
    toast.success("Information saved!");
  };

  const handleLogout = () => {
    dispatch(logout());
    
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-[600px]">
      <h2>Edit Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" input"
      />
      <input type="text" placeholder="number" className=" input" />
      <input placeholder="address" className=" input" />
      <div>
        <Button type="small" onClick={handleSave} className="btn">
          Save
        </Button>
        <Button type="formbtn" onClick={handleLogout} className="btn mt-2">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AccountSeting;
