const Service = require('egg').Service;

class WeatherService extends Service {
    async get(uid) {
        console.log(uid);
        const weather = await this.ctx.db.query('select * from pm25 where id = ?', uid);

        // 假定这里还有一些复杂的计算，然后返回需要的信息。
        // const picture = await this.getPicture(uid);

        return {
            id: weather.id,
            aqi: weather.aqi,
            date: weather.date
        };
    }

    // async getPicture(uid) {
    //     const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, {
    //         dataType: 'json'
    //     });
    //     return result.data;
    // }
}

module.exports = WeatherService;