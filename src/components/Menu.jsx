import { useState } from 'react';
import MenuItem from './MenuItem';
import AddItem from './AddItem';

function Menu() {
    const [menuItems, setMenuItems] = useState([
        { name: 'Cheeseburger', price: 5.99, isAvailable: true, description: 'Classic cheeseburger with lettuce, tomato, and cheese.' },
        { name: 'Chicken Sandwich', price: 6.49, isAvailable: true, description: 'Crispy chicken sandwich with pickles and mayo.' },
        { name: 'French Fries', price: 2.99, isAvailable: true, description: 'Golden and crispy french fries.' },
        { name: 'Milkshake', price: 3.99, isAvailable: true, description: 'Creamy milkshake in various flavors.' },
    ]);
    const [isEditable, setIsEditable] = useState(false);

    const toggleEditMode = () => {
        setIsEditable(!isEditable);
    };

    const addMenuItem = (newItem) => {
        setMenuItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div>
            <button onClick={toggleEditMode}>{isEditable ? 'Switch to Display Mode' : 'Switch to Edit Mode'}</button>
            <div className="menu-container">
                {menuItems.map((item, index) => (
                    isEditable || item.isAvailable ? (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            price={item.price}
                            isAvailable={item.isAvailable}
                            description={item.description}
                            isEditable={isEditable}
                            setMenuItems={setMenuItems}
                            index={index}
                        />
                    ) : null
                ))}
                {isEditable && <AddItem addMenuItem={addMenuItem}/>}
            </div>
        </div>
    );
}

export default Menu;
