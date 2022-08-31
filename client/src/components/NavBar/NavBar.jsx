import React from 'react';
import './NavBar.css';

const user = {
  id: 1,
  name: 'Kelly',
};

const NavBar = () => {
  function redirectToProfile() {
    window.location.href = `/bootcamp/profile/${user.id}`;
  }

  function redirectBootcamp() {
    window.location.href = '/bootcamp';
  }

  function redirectToCatalog() {
    window.location.href = '/bootcamp/catalog';
  }

  return (
    <div>
      <button
        className="button-profile"
        name="Profile"
        onClick={redirectToProfile}
      >
        Profile
      </button>

      <button
        className="button-bootcamp"
        name="Bootcamp"
        onClick={redirectBootcamp}
      >
        Bootcamp
      </button>

      <button
        className="button-catalog"
        name="Catalog"
        onClick={redirectToCatalog}
      >
        Catalog
      </button>
    </div>
  );
};

export default NavBar;
