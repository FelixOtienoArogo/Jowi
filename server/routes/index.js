import express from 'express';
import Appcontroller from '../controllers/AppController';
import ThumbnailController from '../controllers/ThumbnailController';
import SearchController from '../controllers/SearchController';

function controllerRouting(app) {
    const router = express.Router();
    app.use('/', router);

    router.get('/status', (req, res) => {
        Appcontroller.getStatus(req, res);
    });

    router.get('/thumbnail', (req, res) => {
        ThumbnailController.getThumbnail(req, res);
    });

    router.post('/search', (req, res) => {
        SearchController.getSearch(req, res);
    });
}
export default controllerRouting;