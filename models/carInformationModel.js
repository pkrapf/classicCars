const pool = require("../connection").pool;

function create(req, res) {
    let yearMakeModel = req.body.yearMakeModel;
    let description = req.body.description;
    let imageURL = req.body.imageURL;
    pool.query("INSERT INTO cars (yearMakeModel, description, imageURL) VALUES(?,?,?)",
        [yearMakeModel, description, imageURL], (err, result) => {
            if (!err) {
                return res.send({ msg: "Car was Added!" });
            }
            console.log(err);
            res.status(500).send({ error: "SOMETHING BROKE" })
        })
}

function getAll(req, res) {
    pool.query("SELECT * FROM cars", (err, result)=>{
        console.log(result);
        res.send({
            error: err,
            cars: result
        })
    })
}

module.exports.getAll = getAll;
module.exports.create = create;