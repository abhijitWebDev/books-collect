# My Books collection application

This is a simple Node.js application that uses Express and MongoDB to manage books through a RESTful API.

## Prerequisites

Before you begin, ensure you have installed the following:

- Node.js and npm. You can download these from [here](https://nodejs.org/en/download/).
- MongoDB. You can download it from [here](https://www.mongodb.com/try/download/community).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abhijitWebD/books-collect.git
```

2. Navigate into the project directory:

```bash
cd my-nodejs-app
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the MongoDB service.

2. Connect to the MongoDB database:

```bash
npm run db
```

3. Start the application:

```bash
npm start
```

The application runs on `http://localhost:3000`.

## API Endpoints

The application provides the following API endpoints:

- `GET /books`: Fetch all books.
- `GET /books/:id`: Fetch a single book by its ID.
- `POST /books`: Create a new book.
- `PUT /books/:id`: Update a book by its ID.
- `DELETE /books/:id`: Delete a book by its ID.

The book data is structured as follows:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary"
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

- Deployed on digital ocean
- I have deployed on digital ocean and the link is 
- Deployed link is [here](https://whale-app-ff5yn.ondigitalocean.app/api/books).
- I have connected it to github repo and deployed the main branch and when I change something in main branch and push it, it will redeploy again
- for deployment it is working only for get request.

- The hurdles I faced is updation by id , in that I have to fix the update the controller and handle the null case.