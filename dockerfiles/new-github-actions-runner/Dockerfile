FROM debian:latest

RUN apt update -y
RUN apt install -y \
    curl \
    tar \
    sudo

ENV RUNNER_NAME=romeo-homelab-runner
ENV RUNNER_WORK_FOLDER=_work
ENV GITHUB_URL=https://github.com/romeosarkar10x/experiments

ARG RUNNER_TOKEN

RUN if [ -z "${RUNNER_TOKEN}" ]; then \
    echo "ERROR: ARG \`RUNNER_TOKEN\` is required"; \
    exit 1; \
fi

ENV RUNNER_USER=runner
ENV RUNNER_HOME=runner

RUN useradd -m ${RUNNER_USER} \
    && passwd -d ${RUNNER_USER} \
    && usermod -aG sudo ${RUNNER_USER} \
    && echo "${RUNNER_USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN echo 'su ${RUNNER_USER}; exec /home/${RUNNER_HOME}/run.sh' > /start.sh && chmod 111 /start.sh

WORKDIR /home/${RUNNER_HOME}
USER ${RUNNER_USER}

RUN mkdir actions-runner && cd actions-runner
RUN curl -o actions-runner-linux-x64-2.323.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.323.0/actions-runner-linux-x64-2.323.0.tar.gz
RUN tar xzf ./actions-runner-linux-x64-2.323.0.tar.gz


RUN sudo ./bin/installdependencies.sh
RUN ./config.sh --unattended --name ${RUNNER_NAME} --url ${GITHUB_URL} --token ${RUNNER_TOKEN}

ENTRYPOINT ["/bin/bash", "/start.sh"]