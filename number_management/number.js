const express = require('express');
const app = express();
const axios = require('axios');

app.get('/numbers', async (req, res) => {
    try {
        const urls = req.query.url;
        let urlsList = [];
        let list = [];
        if (!Array.isArray(urls))
            urlsList.push(urls);
        else {
            urlsList = [...urls];
        }
        for (let url of urlsList) {
            try {
                const response = await axios.get(url);
                if (response.status >= 200 && response.status < 300) {
                    const data = response.data;
                    list = [...list, ...data.numbers];
                } else {
                    console.log('Invalid api');
                }
            } catch (error) {
                console.log("Api error");
            }
        }
        const finalList = [...new Set(list)];
        finalList.sort((a, b) => a - b);
        res.status(200).json({ 'numbers': finalList })
    } catch (error) {
        res.send(error)
    }
});

app.listen(8000, () => {
    console.log(`Server is running`);
});