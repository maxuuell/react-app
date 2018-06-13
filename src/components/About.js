import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const About = ({ showHeader }) => (
	<div>
		{showHeader &&
			<h1>This app does amazing things!</h1>
		}
	</div>
);

About.propTypes = {
	showHeader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
	{
		showHeader: state.showHeader,
	}
);

const AboutPage = connect(mapStateToProps)(About);

export default AboutPage;
