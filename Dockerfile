# Use the official Node.js 18 image as the base image
FROM node:18        


# Set the working directory in the container to /app
WORKDIR /app       


# Copy the contents of the current directory to the working directory in the container
COPY . .          


# Install the dependencies specified in package.json
RUN npm install    

# Expose port 3000 for the application to listen on
EXPOSE 3000      

# Start the application using the npm start command
CMD ["npm", "app.js"] 



# docker build -t gitops-app .   ==> to build image
# docker run -p 3000:3000 gitops-app  ==> to create and run container 