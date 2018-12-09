module.exports = {
    schedule: {
        interval: '24h',
        type: 'worker',
        immediate: true
    },
    async task(ctx) {
        console.log(new Date());
    },
};
