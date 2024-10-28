#! /usr/bin/sh
set -eux

(
    cd `realpath .`
    docker run \
    -it \
    --rm \
    --name blog-dev \
    --network host \
    --user 1000 \
    -v $(pwd):/data \
    -w /data \
    node \
    bash
)
