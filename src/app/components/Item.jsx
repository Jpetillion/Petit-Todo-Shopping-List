import React from 'react';

const Item = ({ id, content, status, onStatusChange, onDelete }) => { // Receive onStatusChange and onDelete as props
return (
<div className="item">
    {content} - {status}
    <button onClick={() => onStatusChange(id)}>Change Status</button>
    <button onClick={() => onDelete(id)}>Delete</button>
</div>
);
}
export default Item;