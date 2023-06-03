import { Input } from "@chakra-ui/react";

const ProductSearchBar = ({ searchText, setSearchText }) => {
  const handleSearchChange = (event) => {
      setSearchText(event.target.value);
  };

  return (
    <Input 
      width="90%"
      margin="10px auto 0 auto"
      type="text"
      placeholder="Search products"
      value={searchText}
      onChange={handleSearchChange}
    />
  );
};

export default ProductSearchBar;
