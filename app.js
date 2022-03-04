
const express = require('express');
const app = express();


const port =  3000
app.use(express.static('public'));

const marsMissions = require ('./models/marsMissions')



app.get('/marsMissions/', (req, res)=>{
    res.render('index.ejs',{
        missions : marsMissions
    })
})

app.get('/marsMissions/:marsMissionIndex', (req, res) => {
    res.render('show.ejs', {
        missionPage : marsMissions[req.params.marsMissionIndex]
    })
})


app.listen(port, ()=>{
    console.log('express is active')
})
