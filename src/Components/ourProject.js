import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import projectBanner from '../Images/project-banner.png';
export default class ourProject extends Component {
    render() {
        return (
            <div >
                <img className="project-banner" src={projectBanner} />
                <h1>Hello from project</h1>
            </div>
        )
    }
}
