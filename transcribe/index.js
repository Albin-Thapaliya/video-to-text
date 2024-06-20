const express = require('express');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const { exec } = require('child_process');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const ngrok = require('ngrok');
const ffmpeg = require('fluent-ffmpeg');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = 3000;

const downloadsDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(downloadsDir)){
    fs.mkdirSync(downloadsDir, { recursive: true });
    console.log('Download directory created:', downloadsDir);
}

app.post('/transcribe', async (req, res) => {
  console.log('Received transcription request:', req.body);
  const { url, name, timestamp } = req.body;
  const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const audioPath = path.join(downloadsDir, `${safeName}.mp3`);
  const trimmedAudioPath = path.join(downloadsDir, `${safeName}_trimmed.mp3`);

  console.log(`Starting download for ${url}...`);

});



app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
