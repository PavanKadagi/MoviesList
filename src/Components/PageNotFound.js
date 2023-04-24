import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Go to Home
      </h3>
    </>
  );
};
export default PageNotFound;
