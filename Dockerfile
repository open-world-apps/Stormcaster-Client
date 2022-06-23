FROM ubuntu@sha256:ddc3a7ac64cb88fc871d156d4f2d518f51c24025b7bbf05ee00e777c9a52d8f6
# 22.10

RUN apt update && apt upgrade -y && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends --force-yes build-essential gettext python3 python3-dev python3-venv python3-setuptools python3-pip unzip git redis-server curl libssl-dev libbz2-dev libffi-dev dos2unix vim

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
    nvm install --lts && \
    npm i -g yarn

COPY . /app/client-app
WORKDIR /app/client-app

RUN yarn install

CMD ["yarn", "dev"]