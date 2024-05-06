import { useState } from "react";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SlideRegisterWares = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const containerVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box mt={'-30px'} fontFamily={'Raleway'}>
      <Button onClick={() => setIsPanelOpen(!isPanelOpen)}>
        {isPanelOpen ? "Hide Panel" : "Show Panel"}
      </Button>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isPanelOpen ? "visible" : "hidden"}
        style={{ width: "300px", backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px", marginTop: "2px" }}
      >
        <Stack spacing={3}>
          <Input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter item name"
          />
          <Button onClick={handleAddItem}>Add Item</Button>
          {items.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default SlideRegisterWares;
