import CarsiCategory from 'components/ui/CarsiCategory';
import React, { useEffect, useState } from 'react'
import categoryData from '../../api/carsiCategories.json';
import Title from '../ui/Title';

const CarsiCategories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        //setTimeout(()=>setCategories(categoryData),1000)
        setCategories(categoryData)
    }, [])

    return (
        <div className="bg-white py-4">
            <div className="container mx-auto">
                <Title>İşletme Kategorileri</Title>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
                    {/*   {!categories.length && 'Yükleniyor...'} */}
                    {
                        categories && categories.map((category, index) => <CarsiCategory key={index} category={category} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CarsiCategories
