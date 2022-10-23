FROM node:17

# Working Dir
WORKDIR /user/src/app

# Copy package Json Files
COPY package*.Json ./

# Install files
RUN npm install

# Copy Source Files
COPY . .

# Build
RUN npm run build

# Bind the port that the image will run on
EXPOSE 3000

CMD [ "node", "src/server.js" ]