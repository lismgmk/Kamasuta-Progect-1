import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


export function Nav() {
    return (
        <nav className={s.nav}>


                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/message'>Message</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news'>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/music'>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/setting'>Setting</NavLink>
                    </div>


        </nav>
    )
}

