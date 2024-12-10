import axios from '../axios'; // Mengimpor Axios yang sudah dikonfigurasi

export const getAllProjects = async () => {
  try {
    const response = await axios.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    throw error;
  }
};

export const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${projectId}:`, error);
    throw error;
  }
};import axios from '../axios'; // Mengimpor Axios yang sudah dikonfigurasi

export const getAllProjects = async () => {
  try {
    const response = await axios.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    throw error;
  }
};

export const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${projectId}:`, error);
    throw error;
  }
};
