import {Box, Button, Grid, Modal, Paper, styled, Typography} from "@mui/material";
import { useState } from "react";
import {Container} from "postcss";
import Webcam from "react-webcam";
import WebcamCapture from "@/components/webcam";

function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            ><>
                <Box sx={{marginTop: '20em'}}>
                <Grid container sx={{marginLeft: 'auto', marginRight: 'auto'}} spacing={4} maxWidth={600}>
                    <Grid item xs={12}>
                        {/*<Item><Webcam videoConstraints={{width: 320, height: 180}}></Webcam></Item>*/}
                        <Item><WebcamCapture></WebcamCapture></Item>
                    </Grid>

                </Grid>
                </Box>
            </>
            </Modal>
        </div>
    );
}

export default BasicModal