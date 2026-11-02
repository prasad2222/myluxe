const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./modules/auth/auth.routes');
const profileRoutes = require('./modules/profile/profile.routes');

app.use('/api/auth',authRoutes)
app.use('/api/profile', profileRoutes);

module.exports = app
