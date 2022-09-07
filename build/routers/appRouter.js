"use strict";
const express_1 = require("express");
const appController_1 = require("../controllers/appController");
const router = (0, express_1.Router)();
router.route('/').put(appController_1.createShortUrl);
router.route('/:short_url').get(appController_1.getLongUrl);
module.exports = router;
