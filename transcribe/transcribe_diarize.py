import whisper

def trim_or_pad(audio, target_length=30, sample_rate=16000):
    current_length = len(audio) / sample_rate
    if current_length < target_length:
        pad_length = int((target_length - current_length) * sample_rate)
        padded_audio = np.pad(audio, (0, pad_length), mode='constant')
        return padded_audio
    elif current_length > target_length:
        trim_length = int(target_length * sample_rate)
        return audio[:trim_length]
    return audio

def transcribe(audio_name, audio_path):
    model = whisper.load_model("base")
    audio = whisper.load_audio(audio_path)
    audio = trim_or_pad(audio)

    mel = whisper.log_mel_spectrogram(audio).to(model.device)

    _, probs = model.detect_language(mel)
    detected_language = max(probs, key=probs.get)
    print(f"Detected language: {detected_language}")

    options = whisper.DecodingOptions()
    result = model.decode(mel, options=options)
    print(result.text)

if __name__ == "__main__":
    audio_name = "test"
    audio_path = ""
    transcribe(audio_name, audio_path)
