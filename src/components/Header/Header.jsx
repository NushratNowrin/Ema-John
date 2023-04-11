import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div>
			<div className='header'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				<div className='menu'>
					<ul>
						<li>
							<Link to='/'>Shop</Link>
						</li>
						<li>
							<Link to='/order-Review'>Order Review</Link>
						</li>
						<li>
							<Link to='/manage-inventory'>Manage Inventory</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
