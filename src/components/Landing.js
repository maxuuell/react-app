import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Landing = ({ color }) => (
	<div>
		<h1 style={{ color }}>Let's make something great</h1>
	</div>
);

Landing.propTypes = {
	color: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
	{
		color: state.headerColor,
	}
);

const LandingPage = connect(mapStateToProps)(Landing);

export default LandingPage;
