import IconSuccessSvg from "../../assets/images/icon-success.svg?react";
function Succes() {
  return (
    <div>
      <IconSuccessSvg />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button>  Dismiss message </button>
    </div>
  );
}

export default Succes;
