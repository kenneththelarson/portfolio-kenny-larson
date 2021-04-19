import React from 'react';
import coverImage from '../../assets/KennyPhoto.JPG';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <p>
                Born and raised in Utah, I learned my love for computers and computer-generated visual effects at an early age. My family's love for art and filmmaking inspired me to delve deep into computer software, 3D animation, and video editing.
            </p>
            <p>
                In 2015, I married my beautiful wife Alexis, and we had our son Zealand. Together we worked on several short films and won prestigious awards at various film festivals. In 2017, we succeeded in winning Best Film for our short film "Goldfish" in the 48 Hour Film Project. This award allowed us to compete internationally in Paris, France in 2018. Additionally, in 2019, we took home the Best Film and Best Director awards for our short film "Secret's Out" in the Filmulate Film Festival Demonchaser Horror Fest.
            </p>
            <p>
                Early in 2020, I started dabbling with web coding and found an aptitude for it. It was then I decided to switch gears and focus on web development as a career. I enrolled in a coding bootcamp to develop my skills, which allowed me to be more marketable. My experience with film and animation has helped me gain an insight for design and aesthetics that go hand-in-hand with web coding and layout.
            </p>
            <img src={coverImage} style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;