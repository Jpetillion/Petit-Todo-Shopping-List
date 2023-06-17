import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useGet, usePut, usePost, useDelete } from '../hooks';
// import Item from './Item';
// import axios from 'axios';

const List = () => {
//   const navigate = useNavigate();
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const API_KEY = process.env.REACT_APP_API_KEY;
//   const BIN_ID = process.env.REACT_APP_BIN_ID; // Replace with your actual BIN ID
//   const BASE_URL = 'https://api.jsonbin.io/v3/b';

//   const headers = {
//     'Content-Type': 'application/json',
//     'X-Master-Key': API_KEY,
//   };

//   const getURL = `${BASE_URL}/${BIN_ID}`;
//   const { data, loading, error } = useGet(getURL, headers);
//   const { putRequest } = usePut(headers);
//   const { postRequest } = usePost(headers);
//   const { deleteRequest } = useDelete(headers);

//   useEffect(() => {
//     if (data) {
//       setItems(data.record);
//     }
//   }, [data]);

//   const handleStatusChange = async (itemId) => {
//     const updatedItem = { status: 'done' };
//     await putRequest(`${BASE_URL}/${BIN_ID}/${itemId}`, updatedItem);
//     fetchUpdatedItems();
//   };

//   const handleDelete = async (itemId) => {
//     await deleteRequest(`${BASE_URL}/${BIN_ID}/${itemId}`);
//     fetchUpdatedItems();
// };

// const handleAddItem = async () => {
//     const itemData = {
//         content: newItem,
//         status: 'todo',
//     };
//     await postRequest(`${BASE_URL}/${BIN_ID}`, itemData);
//     fetchUpdatedItems();
//     setNewItem('');
// };

// const fetchUpdatedItems = async () => {
//     try {
//         const response = await axios.get(getURL, { headers });
//         setItems(response.data.record);
//     } catch (error) {
//         console.error(error);
//     }
// };

// if (loading) {
//     return <div>Loading...</div>;
// }

// if (error) {
//     return <div>Error: {error.message}</div>;
// }

return (
    // <div className='list'>
    //     <input
    //         type="text"
    //         value={newItem}
    //         onChange={(e) => setNewItem(e.target.value)}
    //     />
    //     <button onClick={handleAddItem}>Add Item</button>
    //     {items.map((item) => (
    //         <Item
    //             key={item.id}
    //             id={item.id}
    //             content={item.content}
    //             status={item.status}
    //             onStatusChange={handleStatusChange}
    //             onDelete={handleDelete}
    //         />
    //     ))}
    // </div>
    <div>test</div>
);
};

export default List;