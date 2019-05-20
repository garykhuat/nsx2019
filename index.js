const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/assets'))
app.set('view engine','ejs')
app.get('/api/getlist',(req, res) => {
    res.json({
        users: [
            {
                name: 'Quyen',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Hanh',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Thuan',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Dung',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Vinh',
                class: 'PQ-WEB-D002'
            },
        ]})
})
app.get('/', (req, res) => {
    res.render('index', {
        users: [
            {
                name: 'Quyen',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Hanh',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Thuan',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Dung',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Vinh',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Tuan',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Hai',
                class: 'PQ-WEB-D002'
            },
            {
                name: 'Minh',
                class: 'PQ-WEB-D002'
            },
        ]})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))