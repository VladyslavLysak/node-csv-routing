import Router from 'express-promise-router';
import {getMovies, getGenredMovies} from '../controllers/movies.controller';

const router = Router();

router.get("/", getMovies);
router.get(`/:genre1`, getGenredMovies);

export default router;