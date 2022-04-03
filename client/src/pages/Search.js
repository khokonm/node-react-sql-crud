import React from "react";
import { useState, useEffect, useCallback } from "react"
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import RenderBooks from "../components/renderBooks";
import debounce from 'lodash.debounce'
import baseAPI from "../lib/baseAPI";
const Search = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [query, setQuery] = useState( "" );
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const submitSearch = useCallback(
        debounce(async (query) =>{
            if(query.length >= 3){
                setLoading(true)
                let response = await baseAPI.get(`/books/search/${query}`)
                setLoading(false)
                setLoaded(true)
                setQuery(query)
                setAllBooks(response.data)
            }
        }
        ,500),
        []
    )

    useEffect(()=>{
        submitSearch(query)
    },[query])
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
                        Search
                    </Typography>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            margin: "20px 0"
                        }}
                        >
                            <TextField fullWidth label="start typing (Min 3 character)" onChange={(e)=>setQuery(e.target.value)}/>
                        </Box>
                </Container>
                <Container maxWidth="md" style={{ marginTop: "20px" }}>
                    <Grid container spacing={3} justify="center">
                        {
                            loading ? 
                            <div>
                                {
                                    !loaded &&
                                    <div>
                                        <h2>Searching, please wait...</h2>
                                    </div>
                                }
                            </div>  
                        :
                        <Grid container spacing="2" justify="center" style={{margin: '20px 0'}}>
                            <RenderBooks allBooks={allBooks} setAllBooks={setAllBooks}/>
                        </Grid>
                        }
                    </Grid>
                    <Grid container spacing="2" justify="center">
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
export default Search;
