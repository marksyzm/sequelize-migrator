const async = require('async');

const waterfall = ['cat','dog'].map((tableName) => {
    return (done) => {
        const umzug = require('./umzug').getInstance(tableName);

        umzug.up().then(() => {
            console.log(`Migration complete for table: "${tableName}"`);
            done();
        }).catch(done);
    };
});

async.waterfall(waterfall, (err) => {
    if (err) {
        console.log('\n\nFail!', err);
    } else {
        console.log('\n\nMigration complete!');
    }
});
