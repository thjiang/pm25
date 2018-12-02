module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Weather = app.model.define('hangzhou', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aqi: INTEGER,
        date: DATE,
        created_at: DATE,
        updated_at: DATE,
    }, {
        freezeTableName: true
    });

    return Weather;
};
