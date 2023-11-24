import { Button } from "flowbite-react";
import "./BtnGroup.css";
import { useState } from "react";
const ButtonGroup = () => {
  const [isTab1Clicked, setIsTab1Clicked] = useState(false);
  const [isTab2Clicked, setIsTab2Clicked] = useState(false);

  const handleTab1Click = () => {
    setIsTab1Clicked(true);
    setIsTab2Clicked(false);
  };

  const handleTab2Click = () => {
    setIsTab1Clicked(false);
    setIsTab2Clicked(true);
  };
  return (
    <>
      {/* <div className="relative mx-auto flex w-fit items-center justify-center space-x-2 rounded-lg bg-primary-light p-2 shadow-lg dark:bg-secondary-dark bg-white">
        <Button.Group>
          <Button color="gray">Monthly Billing</Button>
          <Button color="gray">Yearly Billing</Button>
        </Button.Group>
      </div> */}
      <div class="tab-container  mx-auto bg-white shadow-lg  ">
        <button
          className={isTab1Clicked ? "tab tab--1 clicked" : "tab tab--1"}
          onClick={handleTab1Click}
        >
          Monthly Billing
        </button>
        <button
          className={isTab2Clicked ? "tab tab--2 clicked" : "tab tab--2"}
          onClick={handleTab2Click}
        >
          Annual Billing
        </button>
        <div
          className="indicator"
          style={{ left: isTab1Clicked ? "2px" : "calc(50% - 2px)" }}
        ></div>
      </div>
    </>
  );
};
export default ButtonGroup;
