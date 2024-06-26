# Build studio

- Clean build
  - docker builder prune
  - docker buildx build . -f apps/studio/Dockerfile --target production -t flint/studio:1.0.0 --no-cache
  - docker buildx build . -f apps/studio/Dockerfile --target production -t idusta/bridge-studio:0.0.1 --no-cache