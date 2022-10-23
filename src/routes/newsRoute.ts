import { Router } from 'express';
import newsController from '../controllers/newsController';
const router = Router();

router.get('/', newsController.fetchAllNews);

router.post('/search', newsController.searchInNews);

export default router;
