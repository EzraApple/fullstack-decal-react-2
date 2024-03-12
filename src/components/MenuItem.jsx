import './MenuItem.css';

// eslint-disable-next-line react/prop-types
function MenuItem({ name, price, isAvailable, description, isEditable, setMenuItems, index }) {

    const updateMenuItem = (property, value) => {
        setMenuItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[index] = { ...updatedItems[index], [property]: value };
            return updatedItems;
        });
    };
    const deleteMenuItem = () => {
        setMenuItems((prevItems) => prevItems.filter((item, i) => i !== index));
    };

    return (
        <div className={`menu-item ${isAvailable ? 'available' : 'not-available'}`}>
            {isEditable ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => updateMenuItem('name', e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => updateMenuItem('price', e.target.value)}
                        placeholder="Price"
                    />
                    <label>
                        Available:
                        <input
                            type="checkbox"
                            checked={isAvailable}
                            onChange={(e) => updateMenuItem('isAvailable', e.target.checked)}
                        />
                    </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => updateMenuItem('description', e.target.value)}
                        placeholder="Description"
                    />
                    <button onClick={deleteMenuItem} className={"delete-button"}>Delete</button>
                </>
            ) : (
                <>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>{isAvailable ? 'Available' : 'Not Available'}</p>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
}

export default MenuItem;
