import { Select } from "antd";
import { useMoralis } from "react-moralis";
import { getCollectionsByChain } from "../helpers/collections";

function SearchCollections() {
  const { Option } = Select;
  const { chainId } = useMoralis();
  const NFTCollections = getCollectionsByChain(chainId);

  return (
    <>
      <Select
        showSearch
        style={{ width: "100px", marginLeft: "20px" }}
        placeholder="Find a Collection"
        optionFilterProp="children"
      >
        {NFTCollections &&
          NFTCollections.map((collection, i) => (
            <Option value={collection.addrs} key={i}>
              {collection.name}
            </Option>
          ))}
      </Select>
    </>
  );
}

export default SearchCollections;
