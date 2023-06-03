import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const ProductFilterTab = ({ productFilter, setProductFilter }) => {
  return productFilter ? (
    <Menu width="90%">
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        width="90%"
        margin="0 auto"
        textAlign="left"
      >
        Filtered by '{productFilter}'
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=> {setProductFilter('')}}>Clear filter</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "#86BBD8" }}
        _expanded={{ bg: "#86BBD8" }}
        _focus={{ boxShadow: "outline" }}
        width="90%"
        margin="0 auto"
      >
        Filter by animal   
        <ChevronDownIcon />
      </MenuButton>
      <MenuList matchWidth={true}>
        <MenuItem onClick={()=> {setProductFilter(1)}}>Dog</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter(2)}}>Cat</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter(3)}}>Bird</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter(4)}}>Fish</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter(5)}}>Other</MenuItem>
        <MenuDivider />
        <MenuItem>Cancel</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProductFilterTab;
