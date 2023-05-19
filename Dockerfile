FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
RUN npm run build

# Setup Nginx
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=development /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
# Start the app
# CMD [ "npm", "start" ]