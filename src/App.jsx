import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Categories from './Categories/Categories';
import MenuData from './MenuData/data';

// fetch categories
const fetchedCategories = ['all', ... new Set(MenuData.map((item) => item.category))]
console.log(fetchedCategories);

const App = () => {
    const [menu, setMenu] = useState(MenuData);
    const [categories, setCategories] = useState(fetchedCategories);

    const filteredCategories = (category) => {
        if (category === 'all') {
            setMenu(MenuData);
            return;
        }
        setMenu(MenuData.filter((item) => item.category === category));
    };

    return (
        <>
            <div className="heading">
                <h1 className='header'>Our Menus</h1>
                <div className='divider' />
            </div>

            <Categories fetchedCategories={categories} filteredCategories={filteredCategories} />
            <div className="menu_container">
                <Menu MenuData={menu} />
            </div>
        </>
    )
}

export default App
