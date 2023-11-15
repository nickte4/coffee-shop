import CloseIcon from "@mui/icons-material/Close";

export default function NoAccountModal({ handleClose, handlePay, emptyCart }) {
  function handleContinueAsGuest() {
    handleClose();
    handlePay();
  }

  return (
    <>
      <div className="fixed p-5 w-1/2 h-1/3 left-1/4 top-1/4 bg-secondary border border-black rounded-2xl">
        <CloseIcon
          fontSize="large"
          className="absolute top-3 left-1 cursor-pointer opacity-50 hover:opacity-100"
          onClick={handleClose}
        />
        <h1 className="text-2xl text-center mt-10">
          You have not logged in or signed up.
        </h1>
        <div className="flex justify-evenly items-center mt-5 gap-3">
          <button className="w-1/2 text-2xl rounded-2xl border border-black hover:bg-primary hover:text-white transition-all">
            <a className="w-1/2" href="/login">
              Log in
            </a>
          </button>
          <div className="h-40 bg-primary w-1 rounded-2xl"></div>
          <button
            onClick={handleContinueAsGuest}
            className="w-1/2 text-2xl rounded-2xl border border-black hover:bg-primary hover:text-white transition-all"
          >
            Continue as a Guest
          </button>
        </div>
      </div>
    </>
  );
}
