import React from "react";
import { useState } from "react"
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import baseAPI from "../lib/baseAPI";
const Add = () => {
    const [name, setName] = useState( "" );
    const [author, setAuthor] = useState( "" );
    const [image, setImage] = useState( null );
    const [price, setPrice] = useState( "" );
    const [isbn, setISBN] = useState( "" );
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const addImage = (event) =>{
        setImage(event.target.files[0])
    }
    const addNew = () =>{
        setImage(null)
        setLoading(false)
        setLoaded(false)
    }
    const submitBook = async () =>{
        setLoading(true)
        const data = new FormData()
        data.append('file',image)
        data.append('name',name)
        data.append('author',author)
        data.append('price',price)
        data.append('isbn',isbn)
        let response = await baseAPI.post("/books/new",data)
        if(response.data){
            setLoaded(response.data.message)
        }
    }

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
                        Add a Book
                    </Typography>
                    
                </Container>
                <Container maxWidth="md" style={{ marginTop: "20px" }}>
                    <Grid container spacing={3} justify="center">
                        {
                            loading ? 
                            <div>
                                {
                                    !loaded ?
                                    <div>
                                        <h2>Uploading, please wait...</h2>
                                    </div>
                                    :
                                    <div>
                                        <h2>{loaded}</h2>
                                        <Button variant="contained" color="primary" onClick={()=>addNew()} style={{marginBottom:'20px'}}>
                                            Add Another Book
                                        </Button>
                                    </div>
                                }
                            </div>  
                        :
                        <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            margin: "20px 0"
                        }}
                        >
                            <TextField fullWidth label="Book Name" onChange={(e)=>setName(e.target.value)}/>
                            <TextField fullWidth label="Author Name" onChange={(e)=>setAuthor(e.target.value)}/>
                            <TextField fullWidth label="Price" onChange={(e)=>setPrice(e.target.value)}/>
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
                            <TextField fullWidth label="ISBN" onChange={(e)=>setISBN(e.target.value)}/>
                        </Box>
                        }
                    </Grid>
                    <Grid container spacing="2" justify="center">
                        <Grid item>
                            
                            <Button variant="contained" color="primary" disabled={loading} onClick={submitBook}>
                                Add Book
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
export default Add;
