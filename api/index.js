import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
import routes from './server/routes/PropertyRoutes';

const port = process.env.PORT || 8000;

app.use('/api/v1/properties', routes);
// Handle undefined routes
app.get('*', (req, res) =>
  res.status(200).send({
    message:
      'Url does not exist on this server, but hey thank you for visiting our API.',
  })
);
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;
