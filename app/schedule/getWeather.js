module.exports = {
    schedule: {
        interval: '5h',
        type: 'worker',
        immediate: true
    },
    async task(ctx) {
        // const res = await ctx.curl('http://www.api.com/cache', {
        //     dataType: 'json',
        // });
        // ctx.app.cache = res.data;
        // ctx.service.user.get(1234);
        console.log(new Date());
    },
};