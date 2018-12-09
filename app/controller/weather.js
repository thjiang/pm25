const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class WeatherController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = {
            order: [
                "id",
                ["id", "desc"]
            ],
            limit: 1 // 取最新的一条
        };
        const data = await ctx.model.Weather.findAll(query);
        if (!data) {
            this.ctx.throw(404, 'data not found');
        }
        ctx.body = data;
    }

    async create() {
        const ctx = this.ctx;
        const {
            name,
            age
        } = ctx.request.body;
        const weather = await ctx.model.Weather.create({
            name,
            age
        });
        ctx.status = 201;
        ctx.body = weather;
    }

    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const weather = await ctx.model.Weather.findById(id);
        if (!weather) {
            ctx.status = 404;
            return;
        }

        const {
            name,
            age
        } = ctx.request.body;
        await weather.update({
            name,
            age
        });
        ctx.body = weather;
    }
}

module.exports = WeatherController;