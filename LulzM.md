# Build studio

- Clean builder
  - docker builder prune
- Build
  - docker buildx build . -f apps/studio/Dockerfile --target production -t flint/studio:1.0.0 --no-cache