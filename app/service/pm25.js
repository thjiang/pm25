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

        return {
            location: result.data.HeWeather6[0].basic.location,
            aqi: result.data.HeWeather6[0].air_now_city.aqi,
            qlty: result.data.HeWeather6[0].air_now_city.qlty
        };
    }
}
module.exports = Pm25Service;
