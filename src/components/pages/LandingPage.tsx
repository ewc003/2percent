import React from "react";

import { useNavigate } from "react-router";
import { Button } from "../UI/common/button/Button";


const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
      <Button onClick={() => navigate('/webapp')} label={"Off to our app"}/>
    </main>
  );
};

export default LandingPage;
