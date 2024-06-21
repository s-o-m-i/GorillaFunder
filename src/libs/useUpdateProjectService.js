import { useState, useCallback } from 'react';
import axiosInstance from './axiosService'; // Adjust the path according to your project structure
import {  useToast } from '@chakra-ui/react';

const useUpdateProject = (projectId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();

  const updateProjectField = useCallback(async (key, value) => {
    setLoading(true);
    setError(null);

    // Split the key into parts to handle nested keys
    const keys = key.split('.');
    let updateBody = {};
    let currentLevel = updateBody;

    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        currentLevel[k] = value;
      } else {
        currentLevel[k] = {};
        currentLevel = currentLevel[k];
      }
    });

    try {
      const response = await axiosInstance.put(`/project/${projectId}`, updateBody);
      setLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
      toast({
        title: 'Error',
        description: error.response?.data || 'An error occurred while updating the project',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      return null;
    }
  }, [projectId]);

  return { updateProjectField, loading, error };
};

export default useUpdateProject;
