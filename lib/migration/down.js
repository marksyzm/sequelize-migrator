import Umzug from 'umzug';
import sequelize from 'sequelize';
import async from 'async';
import path from 'path';

const waterfall = ['cat','dog'].map((modelName) => {
    return (done) => {
        const migrations = { path: path.resolve(`../${modelName}/migrations/`) };
        const umzug = new Umzug({ sequelize, migrations });

        umzug.down({ to: 0 }).then(function()  {
            console.log(`Undo migration complete for model: "${modelName}"`);
            done();
        }).catch(done);
    };
});

async.waterfall(waterfall, (err) => {
    if (err) {
        console.log('Fail!', JSON.stringify(err));
    } else {
        console.log('\n\nUndo migration complete!');
    }
});
