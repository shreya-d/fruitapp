var fruits = [
    {"id": 0, "Name": "Apple","title": "Malus domestica", "pic": "Apple.jpg"},
    {"id": 1, "Name": "Banana","title": "Musa","pic": "Banana.jpg"},
    {"id": 2, "Name": "Mango", "title": "Mangifera indica","pic": "Mango.jpg"},
    {"id": 3, "Name": "Pineapple","title": "Ananas comosus","pic": "Pineapple.jpg"},
    {"id": 4, "Name": "Strawberry","title": "Fragaria × ananassa", "pic": "Strawberry.jpg"},
    {"id": 5, "Name": "Watermelon", "title": "Citrullus lanatus","pic": "Watermelon.jpg"}
   
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(fruits.filter(function(fruit) {
            return (fruit.Name).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(fruits);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(fruits[id]);
};

 