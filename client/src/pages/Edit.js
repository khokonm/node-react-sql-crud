import React from "react";
import { useState, useEffect } from "react"
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import baseAPI from "../lib/baseAPI";
const Edit = () => {
    const {id} = useParams();
    const [name, setName] = useState( "" );
    const [author, setAuthor] = useState( "" );
    const [image, setImage] = useState( null );
    const [price, setPrice] = useState( "" );
    const [isbn, setISBN] = useState( "" );
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(false);
    const addImage = (event) =>{
        setImage(event.target.files[0])
    }
    const updateBook = async () =>{
        setLoading(true)
        const data = {
            name,
            author,
            price,
            isbn
        }
        let response = await baseAPI.put(`/books/partialUpdate/${id}`,data)
        setLoading(false)
        if(response.status === 200){
            setMsg("Updated Successfully")
        }
    }
    const updateImage = () =>{
        setLoading(true)
        const data = new FormData()
        data.append('file',image)
        // function to update the image
    }
    const loadInfo = async () =>{
        let response = await baseAPI.get(`/books/details/${id}`)
        setName(response.data.name)
        setAuthor(response.data.author)
        setImage(response.data.image)
        setPrice(response.data.price)
        setISBN(response.data.isbn)
    }
    useEffect( () => {
        loadInfo()
    }, [])
    return (
        <>
            <CssBaseline />
            <main>
                <Container maxWidth="sm" style={{ marginTop: "50px" }}>
                    <Typography
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Edit Book #{id}
                    </Typography>
                    {msg && 
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        {msg}
                    </Typography>
                    }
                </Container>
                <Container maxWidth="md" style={{ marginTop: "20px" }}>
                    <Grid container spacing={3} justify="center">
                        <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            margin: "20px 0"
                        }}
                        >
                            <TextField fullWidth label="Book Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            <TextField fullWidth label="Author Name" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                            <TextField fullWidth label="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                            <TextField fullWidth label="ISBN" value={isbn} onChange={(e)=>setISBN(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid container spacing="2" justify="center">
                        <Grid item>
                            
                            <Button variant="contained" color="primary" disabled={loading} onClick={updateBook}>
                                Update Book
                            </Button>
                            
                        </Grid>
                        <Grid item>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button variant="outlined" color="primary">
                                    Home
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Typography variant="h6" align="center" color="textPrimary" paragraph style={{margin:'10px'}}>
                        Or
                    </Typography>

                    <Grid container spacing={3} justify="center">
                        <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            margin: "20px 0"
                        }}
                        >
                            <Button
                            fullWidth
                            variant="contained"
                            component="label"
                            style={{ marginTop: "20px" }}
                            >
                            Cover Image
                            <input
                                type="file"
                                hidden
                                onChange={(event)=>addImage(event)}
                            />
                            </Button>
                        </Box>
                    </Grid>

                    <Grid container spacing="2" justify="center">
                        <Grid item>
                            
                            <Button variant="contained" color="primary" disabled={loading} onClick={updateImage}>
                                Update Cover Image
                            </Button>
                            
                        </Grid>
                        <Grid item>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button variant="outlined" color="primary">
                                    Home
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                </Container>
            </main>
        </>
    );
};
export default Edit;
