import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addUser } from 'redux/users/usersSlice';
import { useDispatch } from 'react-redux';
import { getAnswer } from 'services/statusApi';

export const AddUsersPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'age': {
        setAge(value);
        break;
      }
      default:
        return;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const answer = await getAnswer();

    const newUser = {
      id: nanoid(),
      name: name,
      age: age,
      status: answer === 'no' ? 'offline' : 'online',
    };
    dispatch(addUser(newUser));
    setName('');
    setAge('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        User name :
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        {' '}
        Age :
        <input type="number" name="age" value={age} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
};
