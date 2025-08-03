import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContexttt, { DataProvider } from "./context/dataContext";

const Page2 = () => {

    const {name ,theme} = useContext(DataContexttt)

  return (
    <>
      <div className= {`App ${theme}`}
        style={{
          // backgroundColor: "gray",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize:"22px",
          fontWeight:"bold"
        }}
      >
        hello from page 2{" "}
        <Link to= {"../"}>Go to Home</Link>
        my name is {name}
      </div>
      
    </>
  );
};

export default Page2;
