const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pageController');

router.get('/', ctrl.home);
router.get('/agents', ctrl.agentsPage);
router.get('/agents/:id', ctrl.agentDetail);
router.get('/maps', ctrl.mapsPage);
router.get('/maps/:id', ctrl.mapDetail);
router.get('/weapons', ctrl.weaponsPage);
router.get('/guides', ctrl.guidesPage);
router.get('/guides/:id', ctrl.guideDetail);

module.exports = router;
