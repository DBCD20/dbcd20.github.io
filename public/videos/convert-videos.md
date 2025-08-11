#### Use the following script to convert video

```
ffmpeg -i public/videos/candidate.mp4 \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 20 \
  -pass 1 \
  -an \
  -f webm /dev/null && \
ffmpeg -i public/videos/candidate.mp4 \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 20 \
  -pass 2 \
  -an \
  -movflags +faststart \
  lossless-video.webm
```
#### Convert image

```
cwebp -lossless my-photo.JPG -o profile-photo.webp
```