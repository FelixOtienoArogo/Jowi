const { google } = require('googleapis');

async function main() {
  const apiKey = 'AIzaSyA5hxN3l1Boxu1M-HIg08UcyDNpx8ZZtIs';
  const youtube = google.youtube({ version: 'v3', auth: apiKey });

youtube.videos.list({
  part: 'snippet',
  id: 'YyFevD8hf2Y'
}, (err, response) => {
  if (err) {
    console.error('Error retrieving video data:', err);
    return;
  }

  const videoData = response.data.items[0].snippet;
  console.log('Video Title:', videoData.title);
  console.log('Video Description:', videoData.description);
});
}

main();
