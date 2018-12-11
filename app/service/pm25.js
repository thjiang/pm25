const Service = require('egg').Service;
class Pm25Service extends Service {
    constructor(ctx) {
        super(ctx);
    }

    async getData(city) {
        const result = await this.getPm25(city);
        return result;
    }

    async getPm25(city) {
        const result = await this.ctx.curl(this.config.api.url, {
            method: 'GET',
            dataType: 'json',
            data: {
                location: city,
                key: this.config.api.key
            }
        });

        return result.data;
    }
}
module.exports = Pm25Service;