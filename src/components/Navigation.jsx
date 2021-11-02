import React from "react"
import {Link, withRouter } from "react-router-dom";

function Navigation(props){
    return (
        <div className = "navigation">
            <nav class = "navbar">
                <div class = "container">
                    <Link class = "navbar-brand" to = "/">
                        React Multi-Page Website
                    </Link>

                    <div>
                        <ul class = "navbar-nav">
                            <li
                            class = {`nav-item ${
                                props.location.pathname === "/" ? "active" : ""
                            }`}
                            >
                                <Link class = "nav-link" to = "/">
                                    Home
                                </Link>
                            </li>

                            <li
                            class = {`nav-item ${
                                props.location.pathname === "/play" ? "active" : ""
                            }`}
                            >
                                <Link class = "nav-link" to = "/play">
                                    Play Game
                                </Link>
                            </li>

                            <li
                            class = {`nav-item ${
                                props.location.pathname === "/rules" ? "active" : ""
                            }`}
                            >
                                <Link class = "nav-link" to = "/rules">
                                    Rules
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default withRouter(Navigation);