import { useState } from 'react';
import './AddItem.css';

// eslint-disable-next-line react/prop-types
function NewItem({ addMenuItem }) {
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newIsAvailable, setNewIsAvailable] = useState(true);
    const [newDescription, setNewDescription] = useState('');

    const handleAddItem = () => {
        if (!newName || !newPrice || !newDescription) {
            alert('Please fill in all fields.');
            return;
        }
        addMenuItem({
            name: newName,
            price: parseFloat(newPrice) || 0,
            isAvailable: newIsAvailable,
            description: newDescription,
        });
        setNewName('');
        setNewPrice('');
        setNewIsAvailable(true);
        setNewDescription('');
    };

    return (
        <div className="new-item">
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="Price"
            />
            <label>
                Available:
                <input
                    type="checkbox"
                    checked={newIsAvailable}
                    onChange={(e) => setNewIsAvailable(e.target.checked)}
                />
            </label>
            <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Description"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}

export default NewItem;
