FROM node:8.10.0-slim

# Allow node to access port 80 without root/sudo
RUN setcap 'cap_net_bind_service=+ep' /usr/local/bin/node

# Create a new user that's not [root]
ENV USER_NON_ROOT appuser
RUN useradd \
    --user-group \
    --create-home \
    --shell /bin/false ${USER_NON_ROOT}
ENV HOME /home/${USER_NON_ROOT}

# Create a directory to hold the application code
ENV APP_ROOT /usr/src/app

# Switch over to the newly created user
WORKDIR ${APP_ROOT}

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production

COPY package*.json ./
COPY tsoa.json ./
COPY tsconfig.json ./
COPY webpack.*.js ./
COPY .babelrc ./
COPY public/ ./public

RUN npm i -g tsoa typescript webpack

RUN npm install

COPY ./src ./src

RUN ls && cd src && ls && cd client && ls && pwd

RUN npm run build

RUN npm prune --production

USER ${USER_NON_ROOT}
EXPOSE 8080

CMD ["node", "build/server.js"]