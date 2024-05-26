import express from "express"; // Import Express with type information

const app: express.Application = express(); // Create an Express application
const port: number = 3000; // Define the port number

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
