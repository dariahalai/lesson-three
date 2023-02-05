import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from 'redux/users/usersSelector';
import { deleteUser } from 'redux/users/usersSlice';
import { toggleStatus } from 'redux/users/usersSlice';
export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {users.map((el, i) => {
              return (
                <tr key={el.id}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.age}</td>
                  <td>
                    <span onClick={() => dispatch(toggleStatus(el.id))}>
                      {el.status}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(deleteUser(el.id))}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>woops...</p>
      )}
    </>
  );
};
