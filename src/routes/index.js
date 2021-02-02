import movieRouter from './movies.router';

export default (app) => {
    app.use('/api/v1/movies', movieRouter);
}
