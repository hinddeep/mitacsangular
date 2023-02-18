#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-tour-of-heroes /usr/share/nginx/html

# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname
# docker push hinddeep/mitacsangular:tagname

#  docker build -t hinddeep/mitacsangular:latest .
# docker run -d -p 80:80 hinddeep/mitacsangular:latest
# docker stop $(docker ps -a -q)
#  docker rm $(docker ps -a -q)