const express = require('express');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const { exec } = require('child_process');

const app = express();

app.use(express.static('public'));

const PORT = 3000;

const downloadsDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(downloadsDir)){
    fs.mkdirSync(downloadsDir, { recursive: true });
    console.log('Download directory created:', downloadsDir);
}

app.post('/transcribe', async (req, res) => {
 
});



app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
