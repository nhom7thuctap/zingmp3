import React, { useState } from 'react';
import './userItem.scss';

function UserItem(props) {
  const [inputValues, setInputValues] = useState({
    edit: 'Edit',
    remove: 'Remove',
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const { user, onEditClick, onRemoveClick } = props;
  const handleEditClick = () => {
    if (onEditClick) onEditClick(user);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(user);
    // console.log('çlicked');
  };

  return (
    <>
      <tbody className="user-item">
        <tr>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <input
              type="submit"
              className="btn btn-edit"
              value={inputValues.edit}
              onChange={handleOnChange}
            ></input>
            <input
              type="submit"
              className="btn btn-remove"
              value={inputValues.remove}
              onChange={handleOnChange}
              onClick={handleRemoveClick}
            ></input>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default UserItem;
