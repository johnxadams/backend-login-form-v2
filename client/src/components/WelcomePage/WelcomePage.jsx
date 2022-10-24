import { useContext } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "../styled-components/Container";
import { MyContext } from "../MyContext";

// styled-components
import { DefaultTitle } from "../styled-components/Title";

// mui
import { Button } from "@mui/material";

export default function WelcomePage() {
  const {setLoggedIn} = useContext(MyContext);


  const handleLogout = async () => {
    axios.get(`/api/user/logout`);
    setLoggedIn(false);
  };

  return (
    <div>
      
      <Container>
      <DefaultTitle>Welcome to the App</DefaultTitle>
        <Link onClick={handleLogout} to="/login">
          <Button sx={{m: 13 }} variant="contained">Logout</Button>
        </Link>
      </Container>
    </div>
  );
}
