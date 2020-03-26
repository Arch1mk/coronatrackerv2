import { useState, useEffect } from 'react';
import axios from  'axios'

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await axios.get(url)
      .then((response)=>{
        //console.log(response)
        setStats(response.data)
        setError()
      })
      .catch((error)=>{
        setError(error)
      })  
      setLoading(false);
    }
    fetchData();
  }, [url]);
  
  return {
    stats,
    loading,
    error,
  };
}
