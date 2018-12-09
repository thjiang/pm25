'use strict';

const http = require("http");
const cheerio = require("cheerio");
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const weather = await getWeather();
        this.ctx.body = weather;
    }
}

module.exports = HomeController;

function getWeather() {
    let res;
    const options = {};
    return new Promise(function (resolve, reject) {
        const baseUrl = "http://www.pm25.com/rank.html";
        let html = "";
        let results = [];

        http.get(baseUrl, function (res) {
            res.on("data", function (chunk) {
                html += chunk;
            })
            res.on("end", function () {
                var $ = cheerio.load(html);
                $(".rank_box li").each((i, item) => {
                    if (
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "杭州" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "大庆" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "成都" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "洛阳" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "北京" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "重庆" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "苏州" ||
                        $(".rank_box .pjadt_location")[i].childNodes[0].data === "西安"
                    ) {
                        results.push({
                            location: $(".rank_box .pjadt_location")[i].childNodes[0].data,
                            aqi: $(".rank_box .pjadt_aqi")[i].childNodes[0].data,
                            quality: $(".rank_box .pjadt_quality")[i].childNodes[0].childNodes[0].data
                        });
                    }
                })
                resolve(results);
            });
        });
    })
}
