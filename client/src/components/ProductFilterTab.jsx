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
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        width="180px"
      >
        'Dog' 
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
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        width="180px"
      >
        Filter by animal   
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=> {setProductFilter('Dog')}}>Dog</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter('Cat')}}>Cat</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter('Bird')}}>Bird</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter('Fish')}}>Fish</MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=> {setProductFilter('Other')}}>Other</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProductFilterTab;
