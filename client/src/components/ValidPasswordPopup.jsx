import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

const ValidPasswordPopup = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <QuestionIcon />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader margin='0 10px' textAlign='left' color='black'>Password must be 8 or more characters and contain at least:</PopoverHeader>
        <PopoverBody color='black' textAlign='left'>
          <ul style={{ padding: '0px 20px' }}>
            <li>1 number</li>
            <li>1 uppercase letter</li>
            <li>1 lowercase letter</li>
            <li>1 special character</li>
          </ul>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ValidPasswordPopup;
