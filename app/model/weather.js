module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Weather = app.model.define('pm25', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        aqi: INTEGER,
        date: DATE,
        city: STRING,
        desc: STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Weather;
};
