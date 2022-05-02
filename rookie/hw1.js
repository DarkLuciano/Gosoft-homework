const express = require('express');
const app = express();
const port = 4100;
const solve24game = require('24game-solver/dist/24game-solver');

app.get('/twentyfour', (req, res) => {
    let N1 = Number(req.query.nu1);
    let N2 = Number(req.query.nu2);
    let N3 = Number(req.query.nu3);
    let N4 = Number(req.query.nu4);
    if (N1 >= 1 && N1 <= 9 &&
        N2 >= 1 && N2 <= 9 &&
        N3 >= 1 && N3 <= 9 &&
        N4 >= 1 && N4 <= 9
    ) {
        const result = solve24game([N1,N2,N3,N4], 24);
        console.log(result)
        if (result.length == 0) {
            res.send('Fail');
        } else {
            res.send('Success' + '\n' + result);
        }
    } else {
        res.status(403).send('Forbidden');
    }

});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});