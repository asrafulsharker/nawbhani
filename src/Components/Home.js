import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Hero from './Hero';
export default class Home extends Component {
    render() {
        return (
            <>
            <Hero >
        <Banner 
        title="NAWBHANI" 
        >
            <Link to="/rooms" className="btn-primary"> 
            our Projects
            </Link>
        </Banner>
        </Hero>
            </>
        )
    }
}
