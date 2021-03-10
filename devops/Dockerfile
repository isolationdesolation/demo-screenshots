FROM mcr.microsoft.com/playwright:bionic
ENV JAVA_HOME /opt/jdk-10.0.1


RUN apt-get update && apt-get install -y software-properties-common tar unzip rsync wget
# Пакеты для корректной работы браузера

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install xorg \
                       gtk2-engines-pixbuf \
                       xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable \
                       imagemagick x11-apps zip

# Установка джавы
RUN mkdir -p /opt/
RUN cd /tmp \
    && curl -L -k "https://download.java.net/java/GA/jdk10/10.0.1/fb4372174a714e6b8c52526dc134031e/10/openjdk-10.0.1_linux-x64_bin.tar.gz" > jre.tar.gz \
    && tar xzf /tmp/jre.tar.gz -C /opt/ \
    && ls -la /opt/

RUN wget https://dl.bintray.com/qameta/generic/allurectl/1.10.2/allurectl_linux_386 -O /usr/bin/allurectl
RUN chmod +x /usr/bin/allurectl


# Папка в контейнере, где будут запускаться тесты
WORKDIR /app

COPY package*.json ./
# Установка зависимостей проекта тестов и копирование всех нужных шагов etc
RUN npm ci
COPY . .