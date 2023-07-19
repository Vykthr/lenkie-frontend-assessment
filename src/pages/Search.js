import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { Container, debounce, Grid } from "@mui/material";
import { searchArtists } from "../api/system";
import ArtistCard from "../components/ArtistCard";

const Search = () => {
    const params = useParams();
    const [ fetching, setFetching ] = useState(false);
    const [ artists, setArtists ] = useState({});
    const [ keyword, setKeyword ] = useState('');

    const getArtists = async (name) => {
        setFetching(true)

        await searchArtists(name)
        .then((resp) => {
            setArtists(resp)
        })
        .catch((err) => {

        })
        .finally(() => {
            setFetching(false)
        })
    }    

    const handleDebouncedSearch = useCallback(
        debounce(getArtists, 200),
        [],
    );

    useEffect(() => {
        const key = params?.keyword || '';
        setKeyword(key)
        handleDebouncedSearch(key);

        const searchElement = document?.getElementById('keyword-input');
        if(searchElement) {
            searchElement.focus()
        }
    }, [params]);

    return (
        <PageContainer fetching={fetching} keyword={keyword} pageTitle="Artist Search">
            <Container>
                <Grid container spacing={3}>
                    {
                        artists?.data?.map((artist, key) => (
                            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                                <ArtistCard artist={artist} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </PageContainer>
    );
};

export default Search;
