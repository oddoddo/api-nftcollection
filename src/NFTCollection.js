import React, { useState, useEffect } from "react";
import axios from "axios";
import NFT from "./NFT"; // NFT 컴포넌트 파일 임포트

function NFTCollection() {
  const [nfts, setNfts] = useState([]); // 여러 NFT 데이터를 저장할 배열 상태

  useEffect(() => {
    async function fetchNFTs() {
      try {
        // 여러 NFT 데이터를 가져옴
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        );
        const nftData = response.data.map((nft) => ({
          image: nft.url,
          name: nft.title,
          author: "Demo Author",
          bidders: ["bidder1.jpg", "bidder2.jpg", "bidder3.jpg"],
          currentbid: "$5000",
          download: nft.thumbnailUrl
        }));
        setNfts(nftData); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        console.error("Error fetching NFT data", error);
      }
    }

    fetchNFTs();
  }, []);

  return (
    <div>
      {nfts.map((nft, index) => (
        <NFT key={index} {...nft} /> // 각 NFT 데이터에 대한 컴포넌트 생성
      ))}
    </div>
  );
}

export default NFTCollection;
