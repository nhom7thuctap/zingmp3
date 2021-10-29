import React from 'react';
import { Table } from 'reactstrap';
import UserItem from '../../Atoms/UserItem/UserItem';

function ListUser(props) {
  const { userList, onUserEditClick, onUserRemoveClick } = props;
  console.log('user list: ', userList);

  return (
    <Table hover>
      <thead>
        <tr>
          <td style={{ fontSize: '20px' }}>ID</td>
          <td style={{ fontSize: '20px' }}>User Name</td>
          <td style={{ fontSize: '20px' }}>Email</td>
        </tr>
      </thead>
      {userList.map((user) => (
        <UserItem
          key={user.username}
          user={user}
          onEditClick={onUserEditClick}
          onRemoveClick={onUserRemoveClick}
        />
      ))}
    </Table>
  );
}

export default ListUser;
