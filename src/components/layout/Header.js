import React from 'react';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>Ohms Law Calculator</h1>
		</header>
	)
}

const headerStyle = {
	width: '100%',
	height: '100px',
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px',
	fontSize: '20px',
	lineHeight: '100px'
}

export default Header;