import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<nav>
		<Link to="/">Landing</Link>
		<Link to="/about">About</Link>
	</nav>
);

export default NavBar;
