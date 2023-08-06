FROM python:3.11-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

USER root


RUN apt-get update && apt-get install -y \
    curl \
    git \
    gnupg2 \
    make \
    less \
    neovim \
    zsh \
    libpq5 && \
    rm -rf /var/lib/apt/lists/*


RUN sh -c "$(curl -L https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -p git -p ssh-agent -p 'history-substring-search' \
    -a 'bindkey "\$terminfo[kcuu1]" history-substring-search-up' \
    -a 'bindkey "\$terminfo[kcud1]" history-substring-search-down'
  
RUN chsh -s /bin/zsh

RUN set -ex && pip install --upgrade pip

RUN pip install geopandas


