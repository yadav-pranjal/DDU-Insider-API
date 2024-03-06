// Import required modules
import express from 'express';
import cors from 'cors';
// import blogPostRoutes from './routes/blogPosts.mjs';
import { Sequelize } from 'sequelize';
// import Category from './models/category.mjs';

const app = express();
app.use(cors());

// Middleware for parsing JSON request bodies
app.use(express.json());



const sequelize = new Sequelize('blog_database', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

app.get('/api/categories', async (req, res) => {
    try {
        // Query categories from the database
        const categories = await sequelize.query('SELECT * FROM categories');
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/blogposts', async (req, res) => {
    try {
        // Query blog posts from the database
        const blogPosts = await sequelize.query('SELECT * FROM blogposts');
        res.json(blogPosts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
