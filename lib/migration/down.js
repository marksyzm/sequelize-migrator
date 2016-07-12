const async = require('async');

const waterfall = ['cat','dog'].map((modelName) => {
    return (done) => {
        const umzug = require('./umzug').getInstance(tableName);

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
