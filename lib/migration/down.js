const Umzug = require('umzug');
const sequelize = require('../db');
const async = require('async');
const path = require('path');

const waterfall = ['cat','dog'].map((modelName) => {
    return (done) => {
        const migrations = { path: path.resolve(`./lib/${modelName}/migrations/`) };
        const umzug = new Umzug({ sequelize, migrations });

        umzug.down({ to: 0 }).then(function()  {
            console.log(`Undo migration complete for model: "${modelName}"`);
            done();
        }).catch(done);
    };
});

async.waterfall(waterfall, (err) => {
    if (err) {
        console.log('\n\nFail!', err);
    } else {
        console.log('\n\nUndo migration complete!');
    }
});
