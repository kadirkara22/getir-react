import React, { useEffect, useState } from 'react'
import CardsData from '../api/getircards.json'
const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(CardsData)
    }, [])
    return (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0 py-14">
            {
                cards.length && cards.map(card => (
                    <div key={card.id} className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center  text-center">
                        <img className="w-[150px] h-[150px] mb-6" src={card.image} />
                        <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                        <p className="mt-2 text-sm text-gray-700">{card.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards
