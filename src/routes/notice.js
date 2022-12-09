const { Router } = require('express');
const { NoticeCtrl } = require('../controllers');
const { validateBody, validateToken, isValidId, uploadFiles } = require('../middleware');
const { petSchema } = require('../schema');

const router = Router();

router.post('/add', validateToken, uploadFiles.single('petImage'), validateBody(petSchema), NoticeCtrl.addNoticeToCategory);

router.get('/category/:categoryName', NoticeCtrl.getNoticesByCategory);

router.get('/:id', isValidId, NoticeCtrl.getNoticeById);

router.get('/search/:name', NoticeCtrl.searchByNameInTitle);

module.exports = router;
