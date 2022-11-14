import React from "react";
// import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleLogoutClick}>Logout</button>
      </nav>
    </>
  );
}

export default NavBar;
