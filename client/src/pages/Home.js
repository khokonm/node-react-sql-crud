import React from "react";
import { useState, useEffect } from "react";
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Search } from '@material-ui/icons';
import http from "../lib/baseAPI";
import RenderBooks from "../components/renderBooks";
const Home = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [page, setPage] = useState(1)
    const [allLoaded,setAllLoaded] = useState(false)

    const loadBooks = async () =>{
        let response = await http.get(`/books/${page}`)
        
        if(response.data.length < 5){
            setAllLoaded(true)
        }
        setAllBooks([...allBooks,...response.data])
        setPage(page+1)
    }
    useEffect(() => {
        loadBooks()
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
                        Welcome to the library
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        This is a simple library application. It allows you to
                        search for books and add books to the library.
                    </Typography>
                    <Grid container spacing="2" justify="center">
                        <Grid item>
                            <Link to="add" style={{ textDecoration: "none" }}>
                                <Button variant="contained" color="primary">
                                    New Book
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="search" style={{ textDecoration: "none" }}>
                                <Button variant="outlined" color="primary">
                                    <Search />
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md" style={{ marginTop: "20px" }}>
                    <Grid container spacing={3} justify="center">
                        <RenderBooks allBooks={allBooks} setAllBooks={setAllBooks}/>
                    </Grid>
                </Container>
                
                <Container maxWidth="sm" style={{ marginTop: "50px" }}>
                    <Grid container spacing="2" justify="center">
                    {allLoaded ?
                        <Grid item>
                            <Button variant="contained" color="primary" disabled onClick={()=>loadBooks()}>
                                All Books Loaded
                            </Button>
                        </Grid>
                        :
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={()=>loadBooks()}>
                                Load More
                            </Button>
                        </Grid>
                    }
                    </Grid>
                </Container>
            </main>
        </>
    );
};
export default Home;
