import { validationResult } from 'express-validator';
import csvToJson from 'convert-csv-to-json';

const fileInput = './data/data.csv';
const movies = csvToJson.getJsonFromCsv(fileInput);

export const getMovies = async (req, res) => {
    res.json({ movies, success: true, status: 200 })
}

export const getGenredMovies = async (req, res) => {
    let filteredMovies = movies.filter((movie) => movie.genre1 === req.params.genre1);
    
    res.json({ filteredMovies, success: true, status: 200 })
}