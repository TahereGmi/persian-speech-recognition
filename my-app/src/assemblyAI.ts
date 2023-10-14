import axios from 'axios';

const API_ENDPOINT = 'https://api.assemblyai.com/v2/transcript';
const API_KEY = 'b15eb3e8c9af48b8b4835c4f456836cb'; // Replace with your actual API key

export const transcribeAudio = async (audioUrl: string) => {
    try {
        const response = await axios.post(
            API_ENDPOINT,
            { url: audioUrl },
            {
                headers: {
                    'authorization': API_KEY,
                    'content-type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error during transcription:', error);
        throw error;
    }
};
