import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Question(props) {
  const [dropDown, setDropDown] = useState(false);

  function handleDropDown() {
    setDropDown((prevDropDown) => !prevDropDown);
  }

  return (
    <>
      <div className="ml-10 w-screen relative">
        {!dropDown ? (
          <div className="border-4 border-primary p-1 mr-10 mb-10">
            <h2 className="text-4xl ml-3 my-2 text-primary font-bold">
              {props.question}
              <span className="absolute right-20">
                <AddIcon
                  className="cursor-pointer"
                  fontSize="large"
                  onClick={handleDropDown}
                />
              </span>
            </h2>
          </div>
        ) : (
          <div className="border-4 border-primary p-1 mr-10 mb-10">
            <h2 className="text-4xl ml-3 my-2 text-primary font-bold pb-1">
              {props.question}
              <span className="absolute right-20">
                <RemoveIcon
                  className="cursor-pointer"
                  fontSize="large"
                  onClick={handleDropDown}
                />
              </span>
            </h2>
            <h3 className="border-t-4 pt-5 pl-5 border-primary text-2xl mb-5 text-accent font-bold">
              {props.answer}
            </h3>
          </div>
        )}
      </div>
    </>
  );
}
