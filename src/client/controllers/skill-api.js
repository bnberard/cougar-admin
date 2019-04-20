import axios from 'axios';

const fetchSkills = async () => {
  try {
    return await axios.get('/api/v1/Skills');
  } catch (err) {
    console.log('Failed to get skills:', err);
    return [];
  }
};

const searchSkills = async (str) =>
{
    try {
        return await axios.get('/api/v1/Skills?action=search&value=' + str);
      } catch (err) {
        console.log('Failed to get skills:', err);
        return [];
      }
}

const addSkill = async (skill) => {
    try {
      return await axios.post('/api/v1/Skills', skill);
    } catch (err) {
      console.log('Failed to get skills:', err);
      return {};
    }
  };

export { fetchSkills, searchSkills, addSkill };
