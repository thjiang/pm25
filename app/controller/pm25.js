'use strict';

const Controller = require('egg').Controller;

class Pm25Controller extends Controller {
    async index() {
        const pm25list = [];
        for (var city of this.config.cities) {
            console.log(`正在获取【${city}】的空气质量`);
            pm25list.push(await this.ctx.service.pm25.getData(city));
        }

        this.ctx.body = pm25list;
    }
}

module.exports = Pm25Controller;
