# Step 1: Build the React app
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Step 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Use a custom nginx config that listens on port 8080 for Cloud Run
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run expects apps to listen on port 8080
EXPOSE 8080

RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

