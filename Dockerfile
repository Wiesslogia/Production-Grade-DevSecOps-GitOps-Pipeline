FROM node:18        # Use the official Node.js 18 image as the base image


WORKDIR /app       # Set the working directory in the container to /app


COPY . .          # Copy the contents of the current directory to the working directory in the container


RUN npm install    # Install the dependencies specified in package.json

EXPOSE 3000      # Expose port 3000 for the application to listen on

CMD ["npm", "start"] # Start the application using the npm start command
