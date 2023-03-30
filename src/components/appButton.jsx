import React from "react";

class AppLinkButton extends React.Component {
  handleButtonClick = () => {
    if (navigator.userAgent.match(/(Android|iPhone)/)) {
      // window.location.href = "thefullbellyproject_app://";
      window.location.href =
        "https://drive.google.com/uc?id=1jsBfZSw9rSznG2Xz_-mJVXq6r-90F5uk&export=download";
    } else {
      window.location.href =
        "https://drive.google.com/uc?id=1jsBfZSw9rSznG2Xz_-mJVXq6r-90F5uk&export=download";
    }
  };

  render() {
    return <button className="bttn home-btn" onClick={this.handleButtonClick}>Open My App</button>;
  }
}

export default AppLinkButton;
