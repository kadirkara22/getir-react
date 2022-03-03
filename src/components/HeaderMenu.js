import React from 'react'
import { Link } from "react-router-dom";
const HeaderMenu = ({ name, path, Icon, active, handleMenuClick }) => {

    const isActive = active === name;

    return (
        <Link to={path} className={`${active === name ? "bg-primary-brand-color p-3 rounded-t-lg" : "hover:bg-primary-brand-color p-3 hover:rounded-t-lg"}`} onClick={() => handleMenuClick(name)}>
            <Icon active={isActive} />
        </Link>
    )
}

export default HeaderMenu
