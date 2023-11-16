import React, { useState, useEffect } from "react";
import axios from "axios";

const OpenSeaExample = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(
          "https://api.opensea.io/api/v1/assets"
        );
        setAssets(response.data.assets);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>OpenSea Assets</h1>
      {assets.map((asset) => (
        <div key={asset.id}>
          <h2>{asset.name}</h2>
          <img src={asset.image_url} alt={asset.name} />
        </div>
      ))}
    </div>
  );
};

export default OpenSeaExample;
