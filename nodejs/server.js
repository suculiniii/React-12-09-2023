const express =require('express');
const app =express('');
const PORT =5000;

app.get("/", (req, res) => {
    res.send("saludos care verga");
})

app.listen(PORT, () => console.log (`server running in  ${PORT}`));