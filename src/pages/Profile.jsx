import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

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
      <div className="pt-24 h-screen">
        <div className="mt-12 flex justify-evenly items-center">
          <img
            className="w-40 rounded-full bg-secondary p-2 pl-3"
            src="/generic-user.png"
            alt="generic user icon"
          />
          <h1 className="text-3xl">{sessionStorage.getItem("email")}</h1>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <button
            onClick={logOut}
            className="transition-all hover:scale-110 hover:bg-primary hover:text-white w-36 h-14 rounded-2xl text-3xl bg-secondary"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
