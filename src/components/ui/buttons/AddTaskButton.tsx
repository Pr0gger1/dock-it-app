import React from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {Button} from "@mui/material";

const AddTaskButton = (): React.JSX.Element => {
    return (
        <Button
            variant="text"
            startIcon={<AddRoundedIcon/>}
            sx={{
                color: "var(--fontColor)",
                width: "100%",
                justifyContent: "left"
            }}
        >
            Добавить карточку
        </Button>
    );
};

export default AddTaskButton;