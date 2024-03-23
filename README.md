Event Finder API
Overview
The Event Finder API is a RESTful service designed to allow users to find and add events based on their geographical location and desired dates. It leverages modern technologies to ensure high performance, ease of use, and scalability.

Tech Stack and Database Choice
Tech Stack:
Node.js: Chosen for its non-blocking I/O model, which is great for handling multiple requests simultaneously, making it ideal for our RESTful service that makes numerous external API calls.
Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications, facilitating the rapid development of API endpoints.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward, schema-based solution to model application data. It includes built-in type casting, validation, query building, and business logic hooks.
Database:
MongoDB: A NoSQL database known for its flexibility, scalability, and performance. It's schema-less, which makes it suitable for our application that may evolve over time. MongoDB's geospatial support is beneficial for querying events based on location.
Design Decisions and Challenges:
RESTful Architecture: Emphasized stateless operations and clear, hierarchical resource identification for ease of use and scalability.
Pagination: Implemented pagination in the event listing API to handle large datasets efficiently and improve the client's user experience.
External API Integration: Integrated with external Weather and Distance Calculation APIs asynchronously to enrich the event data without significantly impacting response times.
Error Handling: Developed robust error handling to manage external API failures gracefully, ensuring the service's reliability.
Prerequisites
Before you begin, ensure you have installed:

Node.js (v12.x or later)
npm (comes with Node.js)
MongoDB (v4.x or later)
Setup Instructions
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/event-finder-api.git
cd event-finder-api
Install Dependencies
bash
Copy code
npm install
Set Up Environment Variables
Create a .env file in the root directory of your project. Add the following lines, replacing the placeholder values with your actual data:

plaintext
Copy code
MONGODB_URI=""
WEATHER_API_KEY=your_weather_api_key
DISTANCE_API_KEY=your_distance_api_key
Start MongoDB
Ensure your MongoDB instance is running. If you're using a local setup, typically you'd run:

bash
Copy code
mongod
Populate the Database (Optional)
If you have a CSV file with initial event data, use the provided script to populate your database:

npm start
This will launch the Event Finder API server on http://localhost:8080.

Testing the API
You can test the API endpoints using Postman or any HTTP client:

Add Event: POST /api/events
Find Events: GET /api/events/find?latitude=XX.XXXX&longitude=YY.YYYY&date=YYYY-MM-DD&page=N
Replace the placeholders with actual query parameters.
