import React from 'react';
import { NavLink } from 'react-router-dom';



export const NavComponent = () => {
  const classActive = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  }
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-light'>
				<div className='container-fluid'>
					<NavLink
						className='navbar-brand'
						to='/'>
						Challenge
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink
									className={classActive}
									aria-current='page'
									to='login'>
									Login
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className={classActive}
									to='about'>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
