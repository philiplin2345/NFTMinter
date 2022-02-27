import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTTokenIds = (collectionAddress) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  const { chainId } = useMoralis();
  const { resolveLink } = useIPFS();
  const [NFTTokenIds, setNFTTokenIds] = useState([]);
  const {
    fetch: getNFTTokenIds,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(token.getAllTokenIds, {
    chain: chainId,
    address: collectionAddress,
  });
  console.log("coladdr", collectionAddress);
  console.log(getNFTTokenIds);
  console.log(data);
  useEffect(() => {
    if (isInitialized) {
      getNFTTokenIds();
    }
  }, [isInitialized, getNFTTokenIds]);

  useEffect(() => {
    if (data?.result) {
      const NFTs = data.result;
      for (let NFT of NFTs) {
        if (NFT?.metadata) {
          NFT.metadata = JSON.parse(NFT.metadata);
          // metadata is a string type
          NFT.image = resolveLink(NFT.metadata?.image);
        }
      }
      setNFTTokenIds(NFTs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  console.log(NFTTokenIds);
  return { getNFTTokenIds, NFTTokenIds, error, isLoading };
};

export default useNFTTokenIds;
