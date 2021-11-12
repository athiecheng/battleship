import React from "react"
import {Link, withRouter } from "react-router-dom";


function Home(props){
    return(
        <div className="home">
            <div class="container">
                <div class="mt-5">
                <h1>Home</h1>
                </div>
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