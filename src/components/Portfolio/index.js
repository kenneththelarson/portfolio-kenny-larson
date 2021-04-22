import React from 'react';
import Projects from '../Projects'
import miles from '../../assets/portfolio/miles-ahead-logo.png';
import blog from '../../assets/portfolio/the_tech_blog_screenshot.png';
import fiesta from '../../assets/portfolio/urban-fiesta.jpg';
import weather from '../../assets/portfolio/WeatherScreenshot.png';
import quiz from '../../assets/portfolio/javascriptQuizScreenshot.png';
import scheduler from '../../assets/portfolio/workDaySchedulerScreenshot.png';

function Portfolio() {
    const projects = [
        {
            projectName: 'Miles Ahead',
            repo: 'https://github.com/prestonrl/miles-ahead',
            deployed: 'https://miles-ahead.herokuapp.com/',
            img: miles
        },
        {
            projectName: 'Urban Fiesta',
            repo: 'https://github.com/kenneththelarson/urban-fiesta',
            deployed: 'https://kenneththelarson.github.io/urban-fiesta/',
            img: fiesta
        },
        {
            projectName: 'The Tech Blog',
            repo: 'https://github.com/kenneththelarson/the-tech-blog',
            deployed: 'https://kenny-tech-blog.herokuapp.com/',
            img: blog
        },
        {
            projectName: 'Weather Dashboard',
            repo: 'https://github.com/kenneththelarson/weather-dashboard',
            deployed: 'https://kenneththelarson.github.io/weather-dashboard/',
            img: weather
        },
        {
            projectName: 'Work Day Scheduler',
            repo: 'https://github.com/kenneththelarson/work-day-scheduler',
            deployed: 'https://kenneththelarson.github.io/work-day-scheduler/',
            img: scheduler
        },
        {
            projectName: 'JavaScript Quiz',
            repo: 'https://github.com/kenneththelarson/javascript.quiz',
            deployed: 'https://kenneththelarson.github.io/javascript.quiz/',
            img: quiz
        }
    ]

    return (
        <section className="flex-row">
            {projects.map((project, i) => (
                <Projects project={project} i={i} key={project.projectName} />
            ))}
        </section>
    )
};

export default Portfolio;