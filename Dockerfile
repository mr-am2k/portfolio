# Prva faza: Izgradnja Node.js aplikacije
FROM node:20-alpine as build-stage

ENV PORT=3000

WORKDIR /app-portfolio
COPY . /app-portfolio
RUN npm install
RUN npm run build

# Druga faza: Upotreba Nginx za posluživanje aplikacije
FROM nginx:1.22.1-alpine as prod-stage

COPY --from=build-stage /app-portfolio/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
