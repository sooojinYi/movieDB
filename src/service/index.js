import axios from "axios";

const apiKey = "7987291ba07615389cfb048c97c9a49a";
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const searchUrl = `${url}/search/movie`;

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(searchUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        include_adult: "false",
        page: 1,
        query: query,
      },
    });
    const posterUrl = `https://image.tmdb.org/t/p/original/`;
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularit"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
      releaseDate: m["release_date"],
    }));

    return modifiedData;
  } catch (err) {
    if (err) {
      return [];
    }
  }
};

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1,
      },
    });

    console.log(data);
    const posterUrl = `https://image.tmdb.org/t/p/original/`;
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularit"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
      releaseDate: m["release_date"],
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: genre_id,
      },
    });

    const posterUrl = `https://image.tmdb.org/t/p/original/`;
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularit"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data["results"].map((p) => ({
      id: p["id"],
      popularity: p["popularity"],
      name: p["name"],
      profileImg: "https://image.tmdb.org/t/p/w200" + p["profile_path"],
      known: p["known_for_department"],
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopratedMovie = async () => {
  try {
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = `https://image.tmdb.org/t/p/original/`;
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularit"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data["results"][0];
  } catch (error) {
    console.log(error);
  }
};

export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data["cast"].map((c) => ({
      id: c["cast_id"],
      character: c["character"],
      name: c["name"],
      img: "https://image.tmdb.org/t/p/w200" + c["profile_path"],
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilarMovie = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: "en_US",
      },
    });
    const posterUrl = `https://image.tmdb.org/t/p/original/`;
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularit"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};