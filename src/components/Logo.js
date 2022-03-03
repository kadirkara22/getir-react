import React from 'react'

const Logo = ({ LogoImg, active }) => {
    console.log(active)
    return (
        <>
            <LogoImg className={"h-[22px] w-22"} active={active} />
        </>
    )
}

export default Logo

