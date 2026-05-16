const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/productos", (req, res) => {
    res.json({
        data: [
            {
                id: 1,
                sku: "A-001",
                nombre: "Cable HDMI",
                stock: 10
            }
        ]
    });
});

module.exports = app;