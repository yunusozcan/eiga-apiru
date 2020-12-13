# EIGA APURI
Movie search app with OMDb. Movie component referenced by https://schema.org/Movie

#### Run
```bash
docker build -t eiga:dev .
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    eiga:dev
```

## Tech Stack
```bash
react, cra, redux, react-router-dom, axios, material-ui
```
