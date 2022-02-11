import React from 'react'

const Menu = ({ title, items }) => {
    return (
        <section className="w-96">
            <nav className="grid gap-y-4 flex items-center justify-center">
                <h6 className="text-lg text-primary-brand-color">{title}</h6>
                <nav>
                    <ul className="grid gap-y-2">
                        {
                            items.map((item, index) => (
                                <li key={index} >
                                    <a href="#" className="text-sm hover:text-brand-color">{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </nav>
        </section>
    )
}

export default Menu
