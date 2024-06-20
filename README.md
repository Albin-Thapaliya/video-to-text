
# Video-to-Text

## Overview

`video-to-text` is an open-source project that automates the transcription of videos into text. It leverages Google Apps Script for Google Sheets integration and a Node.js backend for processing video and audio files. The project also includes a Python script to handle the transcription using Whisper.

## Table of Contents
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Automatically triggers transcription when a checkbox is checked in Google Sheets.
- Extracts audio from YouTube videos.
- Trims audio based on timestamps if provided.
- Transcribes audio using the Whisper model.

## Setup Instructions

### Google Apps Script

1. Open your Google Sheets.
2. Click on `Extensions` -> `Apps Script`.
3. Copy the content of `macros.gs` and paste it into the script editor.
4. Save the script and close the editor.

### Node.js Backend

1. Clone the repository.
2. Navigate to the `transcribe` directory.
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node index.js
   ```

### Python Transcription Script

1. Ensure you have Python installed.
2. Install the required Python packages:
   ```sh
   pip install whisper
   ```
3. Edit the `transcribe_diarize.py` script to update `audio_name` and `audio_path` as needed.

## Usage

### Google Sheets Integration

1. Open your Google Sheets and enter video URL, name, and optionally a timestamp in columns A, B, and C respectively.
2. Check the checkbox in column D to trigger transcription.
3. The status and transcription path will be updated in column E.

### Node.js Server

1. The server listens on port 3000 by default.
2. Use ngrok or a similar tool to expose your local server if needed.

### Python Script

1. Run the script manually if needed:
   ```sh
   python transcribe_diarize.py
   ```

## File Structure

```
video-to-text/
├── macros.gs
├── appsscript.json
├── transcribe/
│   ├── index.js
│   ├── package.json
│   ├── transcribe_diarize.py
│   └── public/
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

---

By following the above instructions, you should be able to set up and use the `video-to-text` project to automate video transcriptions effectively. If you encounter any issues or have suggestions for improvement, please feel free to contribute or open an issue in the repository.
