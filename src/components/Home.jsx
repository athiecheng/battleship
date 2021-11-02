import React from "react"
import {Link, withRouter } from "react-router-dom";


function Home(props){
    return(
        <div className="home">
            <div class="container">
                <h1>Home</h1>
            </div>
            <div>
                <Link class = "nav-link" to = "/play/normal-play">
                    normal play
                </Link>
            </div>
            <div>
                <Link class = "nav-link" to = "/play/free-play">
                    free play
                </Link>
            </div>

        </div>
    )
}

export default Home;