import React, { useState, useEffect } from 'react';
import Card from './sub-component/Card';
import axiosClient from '../../ultils/AxiosClient';
const Collection = () => {
    const [vocab, setVocab] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getVocab = async () => {
        try {
            const response = await axiosClient.get('/vocab', {});
            const data = response.data;
            return data; // Return any relevant data from the response
        } catch (error) {
            // Handle error
            throw error;
        }
    };

    useEffect(() => {
        // Fetch vocab data
        getVocab()
            .then((response) => {
                const vocabArray = Object.values(response);
                setVocab(vocabArray);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Render loading state
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>; // Render error state
    }

    const cardItems = vocab.map((item, index) => {
        return (
            <Card
                key={index}
                word={item.word}
                definition={item.definition}
                example={item.example}
                type={item.type}
                cardKey={item.id}
            />
        );
    });

    return (
        <div className="w-full pt-4">
            <div className="space-y-4">{cardItems}</div>
        </div>
    );
};

export default Collection;