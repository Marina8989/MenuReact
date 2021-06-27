import React, {useState} from 'react';
import items from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    
    const filterCategories = (category) => {
        if(category === 'all'){
           setMenuItems(items);
           return;
        }
        const newCategory = items.filter((item) => item.category === category);
        setMenuItems(newCategory);
    }

    return (
       <main>
           <section className="menu section">
             <div className="title">
                 <h2>our menu</h2>
                 <div className="underline"></div>
             </div>
             <Categories categories={categories} filterCategories={filterCategories}/>
             <Menu items={menuItems} />
           </section>
       </main>
    )
}

export default App;