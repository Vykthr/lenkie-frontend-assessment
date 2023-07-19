import { $axios } from "./config";

const searchArtists = async (keyword) => {
    return $axios.get(`/search/artist/?q=${keyword}`);
}

const getArtistData = async (id) => {
    return $axios.get(`/artist/${id}`);
}

const getArtistTopSongs = async (id, limit = 5) => {
    return $axios.get(`/artist/${id}/top?limit=${limit}`);
}

const getArtistAlbums = async (id, limit = 10) => {
    return $axios.get(`/artist/${id}/albums?limit=${limit}`);
}

const getRelatedArtists = async (id, limit = 10) => {
    return $axios.get(`/artist/${id}/related?limit=${limit}`);
}

const getArtistPlaylists = async (id, limit = 10) => {
    return $axios.get(`/artist/${id}/playlists?limit=${limit}`);
}

const getArtistRadio = async (id, limit = 10) => {
    return $axios.get(`/artist/${id}/radio?limit=${limit}`);
}


const getTopChart = async () => {
    return $axios.get(`/chart`);
}

export {
    searchArtists, getTopChart, getArtistData, getArtistPlaylists, getArtistRadio, getArtistTopSongs, getRelatedArtists, getArtistAlbums
}