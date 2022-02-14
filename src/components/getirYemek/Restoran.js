import React from 'react'

const Restoran = () => {
    return (
        <div className="container mx-auto flex bg-restoran rounded-sm px-2 py-16">
            <div className="xl:hidden">
                <img className="rounded-sm" src="https://getir.com/_next/static/images/partners-main-9aacd2252ceac357cf7d7b48daec30e1.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-y-3 px-10 mx-10">
                <span className="text-primary-brand-color text-3xl font-bold">Restoran sahibi misiniz?</span>
                <span className="text-gray-600 font-semibold">GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</span>
            </div>
            <div className="flex items-center">
                <a href="#" className="flex justify-end bg-brand-yellow font-semibold text-sm text-primary-brand-color cursor-pointer rounded-md py-4 px-8">Hemen Başvur</a>
            </div>


        </div>
    )
}

export default Restoran
