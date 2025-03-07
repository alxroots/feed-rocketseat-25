FROM node:18-alpine AS dev
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

FROM node:18-alpine AS build
WORKDIR /app
COPY --from=dev /app .
RUN npm run build

FROM nginx:latest AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]