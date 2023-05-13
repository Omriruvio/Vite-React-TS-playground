import express from 'express';
const app = express();
import cors from 'cors';
import chalk from 'chalk';
app.use(cors('*'));

app.use((req, res, next) => {
  console.log(`Request has been made from ${chalk.red(req.url)} at ${chalk.cyan(new Date())}`)
  next();
})

app.get('/api/data', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Hello from server.' });
  }, 777);
});

app.get('/', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 0));
  res.send('Title from server');
})

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});