import axios from 'axios';

const fetchUsers = async () => {
  try {
    return await axios.get('/api/v1/Users');
  } catch (err) {
    console.log('Failed to get users:', err);
    return [];
  }
};

const fetchUser = async (id) => {
    try {
      return await axios.get('/api/v1/Users/' + id);
    } catch (err) {
      console.log('Failed to get users:', err);
      return [];
    }
  };

const addUser = async (user) => {
    try {
      return await axios.post('/api/v1/Users', user);
    } catch (err) {
      console.log('Failed to add user:', err);
      return [];
    }
};

const addUserSkill = async(user, skill) =>
{
    try {
        return await axios.put(`/api/v1/Users/${user}/Skills/${skill}`);
      } catch (err) {
        console.log('Failed to add skill to user:', err);
        return [];
      }
}

export { fetchUsers, addUser, fetchUser, addUserSkill };
