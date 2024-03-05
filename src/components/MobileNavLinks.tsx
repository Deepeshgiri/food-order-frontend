import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";



function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Separator/>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        Manage Restaurant
      </Link>
      <Separator/>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Logout
      </Button>
    </>
  );
}

export default MobileNavLinks;
