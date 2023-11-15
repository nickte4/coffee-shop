import { useNavigate } from "react-router-dom";
import Transactions from "../components/Transactions";

export default function Profile() {
  document.title = "Untitled Coffee | Profile";
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");

  function logOut() {
    // remove access token cookie on log out
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    // remove email from session storage on log out
    sessionStorage.removeItem("email");
    // navigate to home page
    navigate("/");
    // reload page
    navigate(0);
  }

  return (
    <>
      <div className="pt-24 pb-12 h-max">
        <div className="mt-12 flex justify-evenly items-center">
          <img
            className="w-40 rounded-full bg-secondary p-2 pl-3"
            src="/generic-user.png"
            alt="generic user icon"
          />
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl">{email}</h1>
            <button
              onClick={logOut}
              className="transition-all hover:scale-110 hover:bg-primary hover:text-white w-36 h-14 rounded-2xl text-3xl bg-secondary"
            >
              Log out
            </button>
          </div>
        </div>
        <Transactions email={email} />
      </div>
    </>
  );
}
