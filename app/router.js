'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', controller.pm25.index);
    router.get('/rank', controller.home.index);
    router.resources('weather', '/weather', controller.weather);
};