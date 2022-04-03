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
    Modal
} from "@material-ui/core";
import { Visibility, Edit, Delete } from '@material-ui/icons'
import { Link } from "react-router-dom";
import BookDescription from "./bookDescription";

const BookCard = ({ index, book, initDelete }) => {
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
                        alt={book.name}
                        height="140"
                        image={book.image}
                        title={book.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {book.author}
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
                                <Link to={`/edit/${book.id}`} style={{
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
                                <Delete onClick={()=>initDelete(book.id)} />
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
                <BookDescription book={book}/>
            </Modal>
        </>
    );
};
export default BookCard;
