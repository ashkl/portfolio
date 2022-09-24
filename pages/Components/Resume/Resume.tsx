import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const jobInfo = () => {

}

export default function Resume() {

    const experience = [
        {
            title: 'QA Consulting',
            date: 'April 2021 - October 2021',
            desc: 'From April 2021 I received training from QA Consulting during a 3-month period. In this training I was able to upskill on Java, JavaScript and created projects using the MERN stack.',
            projects: [
                {
                    title: 'Inventory Management System',
                    date: 'April 2021 - May 2021',
                    desc: 'The aim of this project was to create a system that could create orders using customer data and item data. The system was developed using Java code and on a local MySQL database. The code for the system was tested using JUnit and Mockito. A GCP MySQL instance was used as the database when the system was tested. The Kanban board was developed in Jira which was useful since it had GitHub integration as well.'
                },
                {
                    title: 'Hobby Web Application',
                    date: 'May 2021 - June 2021',
                    desc: 'For this particular project, we could create a web application based on our hobby. I therefore created a web application that can keep track of cars and the modifications done on the cars. The spring boot framework was used to create the backend. This was then connected to a local MySQL database to store the cars and modifications. The frontend website was created using HTML. JavaScript was used to interact with the backend using API calls as well creating the card for each car.'
                },
                {
                    title: 'QA Cinemas',
                    date: 'June 2021 - July 2021',
                    desc: 'The final project was a group task to create a full stack cinema website. I took on the role as the scrum master since I had experience in creating websites and thought this would be a good opportunity to test my leadership skills. I also worked on some of the major functionality in the first sprint such as creating the backend endpoints, the movie listings page, search functionality and the forum board. In the second sprint I helped with testing frontend, backend and styling the website so it will have consistent look. The Mongo database was deployed on the cloud using Atlas. The frontend was created using React and the backend endpoints was created with ExpressJS on top of NodeJS. We used Node as our package manager. In the end of the project, we had a fully functioning website that could take in payments through the PayPal API as well as work seamlessly with the database.'
                }
            ]
        },
        {
            title: 'Infosys',
            date: 'October 2021 - Present',
            desc: '',
            projects: [
                {
                    title: 'Ecolite Project',
                    date: 'April 2022 - Ongoing',
                    desc: ''
                },
                {
                    title: 'NatWest',
                    date: 'July 2021 - Ongoing',
                    desc: ''
                }
            ]
        }
    ]

    const skills = [
        { name: 'REACT' },
        { name: 'Next.js' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'FRONTEND' },
        { name: 'BACKEND' },
        { name: 'MONGO' }
    ]

    return (
        <Stack borderWidth={'1px'} borderRadius={'none'}
            borderColor={useColorModeValue('black', 'white')}
            w='100%' padding={3}
        >
            <Heading fontFamily={"body"} textAlign={'center'}>
                EXPERIENCE
            </Heading>
        </Stack>
    )
}