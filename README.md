# WebSocket Server Example with Express and FS

This repository demonstrates a simple WebSocket server implemented in Node.js. The project includes two implementations of the server:

1. **Using `express` (default implementation):**  
   The main implementation is in `index.js`, where the server uses the `express` framework for routing, static file serving, and WebSocket integration.

2. **Using `fs` (alternative implementation):**  
   For comparison, the file `index_usingFS.js` contains an alternative server implementation using the `fs` library and the native `http` module to serve static files manually.

---

## Features
- WebSocket server to handle real-time, bidirectional communication.
- HTTP server to serve static files and handle simple routes.
- Demonstrates the difference between `express` and `fs` for building servers.

---

## Getting Started

### Prerequisites
- Node.js

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/websocket-server-example.git
   cd websocket-server-example
2. Install dependencies:
    npm install

## Running the Project
### Start the Server (Using Express)
Run the server with express:  node index.js

### Start the Server (Using FS)
Run the alternative server with fs:  node index_usingFS.js

### Access the Server
Open your browser and navigate to:
http://localhost:8082

### How to Test WebSocket Communication
1. Open the browser console (press F12 or Ctrl+Shift+I).
2. Check for a successful WebSocket connection message: Connected to WebSocket server.
3. Interact with the WebSocket server by sending messages and observing the responses.

### Notes
* The index.js file uses the express framework for simplicity and scalability.
* The index_usingFS.js file demonstrates serving files manually using the fs library and native http module.
* The WebSocket server logic remains identical in both implementations.

### License
This project is licensed under the MIT License.
