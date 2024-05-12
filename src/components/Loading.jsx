import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const style = {
  width: "200px",
  height: "200px",
};

const Loading = () => {
  return (
    <div className="loading">
      <Lottie animationData={loading} style={style} />
    </div>
  );
};

export default Loading;
