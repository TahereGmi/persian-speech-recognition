import React, { useState } from 'react';
import { transcribeAudio } from './assemblyAI';

const AudioTranscriber: React.FC = () => {
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [transcription, setTranscription] = useState<string | null>(null);

    const handleTranscribe = async () => {
        try {
            const result = await transcribeAudio(audioUrl);
            // The result may contain various data, including the transcription status and the text itself.
            // You'd typically want to poll the endpoint for the final transcription.
            setTranscription(result.text); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <input 
                type="text"
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
                placeholder="Enter audio URL"
            />
            <button onClick={handleTranscribe}>Transcribe</button>
            {transcription && (
                <div>
                    <h2>Transcription:</h2>
                    <p>{transcription}</p>
                </div>
            )}
        </div>
    );
};

export default AudioTranscriber;
