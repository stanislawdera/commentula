import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import MainContentContainer from '../utils/MainContentContainer'
import Card from '../utils/Card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Home() {

    const [topics, setTopics] = useState([])

    function getTopics() {
        db.collection("topics").limit(3).get().then(function (querySnapshot) {
            setTopics(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                }))
            );
        });
    }

    useEffect(() => {
        getTopics()
    }, [])


    const BlockLink = styled(Link)`
        display: block;
        color: inherit;
        text-decoration: none;
    `


    return (
        <>
            <MainContentContainer>
                <h2>Current topics</h2>

                {
                    topics.map(topic => (
                        <BlockLink key={topic.id} to={`/topic/${topic.id}`}>
                            <Card>
                                <h1>{topic.title}</h1>
                                <p>{topic.content}</p>
                            </Card>
                        </BlockLink>
                    ))
                }
            </MainContentContainer>
        </>
    )
}
