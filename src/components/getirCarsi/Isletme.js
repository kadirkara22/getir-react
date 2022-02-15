import React from 'react'

const Isletme = () => {
    return (
        <div className="container mx-auto md:flex md:items-start md:justify-start bg-restoran rounded-sm px-2 py-16">
            <div className="flex flex-col justify-center gap-y-3 px-10 mx-10">
                <span className="text-primary-brand-color text-xl md:text-3xl font-bold ">İşletme sahibi misiniz?</span>
                <span className="text-gray-600 text-xs lg:text-base font-semibold mb-3">GetirÇarşı işletme iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın</span>
            </div>
            <div className="flex items-center justify-center md:justify-end">
                <a href="#" className="flex bg-brand-yellow font-semibold text-sm  text-primary-brand-color cursor-pointer rounded-md py-3 px-8">Hemen Başvur</a>
            </div>


        </div>
    )
}

export default Isletme