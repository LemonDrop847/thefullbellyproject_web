import "../App.css";
import { useState } from "react";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <br />
      <button onClick={toggleReadMore} className="read-or-hide bttn home-btn">
        {isReadMore ? "Read more" : " Show less"}
      </button>
    </p>
  );
};
  
const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
        Our app is designed to work closely with local NGOs (Non-Governmental Organizations) to help them in their mission to serve communities in need. The app provides an easy-to-use platform for NGOs to create campaigns, raise awareness, and mobilize resources. NGOs can use the app to communicate with their supporters and volunteers, share updates on their activities, and solicit donations to fund their programs. The app also allows NGOs to connect with other organizations in their area and collaborate on projects, sharing resources and knowledge to achieve common goals.

One of the key features of our app is its ability to track donations and monitor their impact in real-time. NGOs can use the app to keep track of donations received, allocate them to specific programs, and report on the progress and impact of those programs. This transparency helps build trust with donors and ensures that their contributions are being used effectively to make a difference in the lives of people in need.
        </ReadMore>
      </h2>
    </div>
  );
};
  
export default Content;