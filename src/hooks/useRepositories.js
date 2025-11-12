import { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch("http://192.168.0.184:5000/api/repositories");
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };
  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};
export default useRepositories;

/*const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://192.168.0.184:5000/api/repositories"
      );
      const json = await response.json();
      setRepositories(json);
    } catch (e) {
      console.error("Failed to fetch repositories", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};
export default useRepositories;*/
