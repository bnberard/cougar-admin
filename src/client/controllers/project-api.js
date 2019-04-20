import axios from 'axios';

const fetchProjects = async () => {
  try {
    return [];
    //return await axios.get('/api/v1/Projects');
  } catch (err) {
    console.log('Failed to get skills:', err);
    return [];
  }
};

const addProject = async (project) => {
    try {
      return {data: project};
      //return await axios.get('/api/v1/Projects');
    } catch (err) {
      console.log('Failed to get skills:', err);
      return [];
    }
  };

export { fetchProjects, addProject };