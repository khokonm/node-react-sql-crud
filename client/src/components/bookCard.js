import React from "react";
import { useState } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    ButtonGroup,
    Button,
    Grid,
    Modal,
    Box,
} from "@material-ui/core";
import { Visibility, Edit, Delete } from '@material-ui/icons'
import { Link } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const BookCard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Grid item xs={12} md={4} sm={6}>
                <Card>
                    <CardMedia
                        component="img"
                        alt="Book Cover"
                        height="140"
                        image="https://source.unsplash.com/random"
                        title="Book Cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Author
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            paragraph
                        >
                            Description of the book goes here.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonGroup
                            variant="contained"
                            color="primary"
                            aria-label="contained primary button group"
                        >
                            <Button onClick={handleOpen} size="small">
                                <Visibility />
                            </Button>
                            <Button size="small" color="primary" >
                                <Link to="/edit/1" style={{
                                    color:"white",
                                    textDecoration:"none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Edit />
                                </Link>
                            </Button>
                            <Button size="small" variant="contained">
                                <Delete />
                            </Button>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <p id="parent-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </p>
                </Box>
            </Modal>
        </>
    );
};
export default BookCard;
