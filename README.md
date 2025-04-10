nnp# Shared Drawing Board

A real-time collaborative drawing board application that allows multiple users to draw together simultaneously.

## Prerequisites

- Node.js installed on your computer
- npm (Node Package Manager) installed on your computer

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies by running:
   ```
   npm install
   ```

## Running the Application

1. Start the server by running:
   ```
   npm start
   ```
   or
   ```
   node server.js
   ```

2. The server will start running on port 3000

## How to Connect

### Local Network Users

1. Find your computer's IP address by running:
   - On Windows: `ipconfig | findstr IPv4`
   - On Mac/Linux: `ifconfig | grep "inet "`

2. Other users on the same network can connect by opening their web browser and navigating to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   (Replace YOUR_IP_ADDRESS with your actual IP address)

### Local Testing

For testing on the same computer, you can open:
```
http://localhost:3000
```

## Features

- Real-time collaborative drawing
- Multiple users can draw simultaneously
- Clear canvas button to reset the drawing
- Automatic synchronization of drawings between all connected users

## Troubleshooting

1. If users cannot connect:
   - Make sure the server is running
   - Check if port 3000 is not blocked by firewall
   - Verify that all users are on the same network
   - Try using the IP address instead of localhost

2. If drawings are not syncing:
   - Check your internet connection
   - Refresh the page
   - Make sure the server is running

## Technical Details

- Built with Node.js and Express
- Uses Socket.IO for real-time communication
- Frontend built with HTML5 Canvas
- No database required - all drawing data is handled in real-time

## Dependencies

- express: ^4.21.2
- socket.io: ^4.8.1 