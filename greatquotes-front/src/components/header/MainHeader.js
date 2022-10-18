import React from 'react';
import classes from "./MainHeader.module.css"
import {NavLink} from "react-router-dom";

function MainHeader(props) {
    return (
        <header className={classes.header}>
            <nav>
                <NavLink className={classes.title} to={"/welcome"}> <h2 >Great Quotes</h2></NavLink>
                <ul>
                    <li>
                        {/*<NavLink to="/quotes" className= {(isActive) => !isActive.isActive ? classes.menu : classes.active}>All Quotes</NavLink>*/}
                        <NavLink to="/quotes" className= {classes.menu}>All Quotes</NavLink>
{/*                        <a href={"#"}>All Quotes</a>*/}
                    </li>
                    <li>
                        <NavLink to="/newQuote" className={classes.menu}>Add a Quote</NavLink>
                        {/*<a href={"#"}>Add a Quote</a>*/}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;