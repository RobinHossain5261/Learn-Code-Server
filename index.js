const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.port || 5000;

const courses = require('./data/courses.json');
const category = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('Now server is running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(course => course.id == id);
    if (!selectCourse) {
        res.send('Course is not found');
    }
    res.send(selectCourse);
})

app.listen(port, () => {
    console.log('Server is running', port)
})