import React from "react";
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import BookCard from "../components/bookCard";
import { Search, ArrowBack, ArrowForward } from '@material-ui/icons';
const Home = () => {
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
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </Grid>
                </Container>
                <Container maxWidth="sm" style={{ marginTop: "50px" }}>
                    <Grid container spacing="2" justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                <ArrowBack />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                <ArrowForward />
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
};
export default Home;
