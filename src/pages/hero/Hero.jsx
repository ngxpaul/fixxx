import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Rating } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import video from './intro.mp4';
import assistant from './assistant.mp4';
import Card from '../../components/card/Card';
import Card2 from '../../components/card/Card2'
import RatingComponent from '../../components/rating/Rating';
import Question from '../../components/question/Question'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import './App.css'
const Hero = () => {
    const imgSrcSet = "https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Fcreate-1.png&w=1080&q=75";
    return (
        <>
            <div className="container mx-auto p-6 md:p-16 parent ">
                <h1 className="text-center text-4xl md:text-7xl font-bold leading-tight text-gradient">Learn and memorize <br /></h1>
                <h1 className="text-center text-4xl md:text-7xl font-bold leading-tight text-slate-600"> new words in a better way</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 text-center">
                    <div className="p-4 text-xl">
                        <FontAwesomeIcon icon={faCircleCheck} color='#71D16B' />
                        <span className='p-2 text-slate-500'>AI-generated words made easy</span>
                    </div>
                    <div className="p-4 text-xl">
                        <FontAwesomeIcon icon={faCircleCheck} color='#71D16B' />
                        <span className='p-2 text-slate-500'>Get word insights with AI Assistant</span>
                    </div>
                    <div className="p-4 text-xl">
                        <FontAwesomeIcon icon={faCircleCheck} color='#71D16B' />
                        <span className='p-2 text-slate-500'>Gamify learning with word games</span>
                    </div>
                </div>
                <RatingComponent />
                <div className="container mx-auto p-6 md:p-16">
                    <div className="aspect-w-16 aspect-h-9">
                        <video className="w-full h-full object-cover rounded-xl shadow-lg sm:rounded-2xl" autoPlay loop muted playsInline preload="auto">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="container mx-auto p-6 md:p-16 text-center">
                    <h1 className="text-center text-4xl md:text-5xl font-bold leading-tight text-gradient">The more that you learn</h1>
                    <h1 className="text-center text-4xl md:text-5xl font-bold leading-tight text-slate-600">the more places you’ll go.</h1>
                    <img className="mx-auto max-w-full h-80" src="https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Fquote-hero.png&w=640&q=75" alt="Quote" />
                </div>
                <Card
                    title="Create new words"
                    subtitle="Build your own word collection"
                    description="Imagine reading a book or watching a movie and coming across some cool new words that you want to add to your vocabulary. Or perhaps you already have a long list of words that you need to memorize"
                    description2="🏆 We offer a personalized approach to word creation based on your interests and needs, helping you save time and stay focused on your goals."
                    srcSet={imgSrcSet}
                    srcSet2={"https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Fcreate.png&w=1080&q=75"}
                />
                <Card2
                    title="CREATE WORDS BY AI"
                    subtitle="AI word-generator"
                    description="Sometimes creating new words on your own might be a tedious and uninspiring task. That's why we've developed our AI-powered Word Generator to make creating new words effortless and exciting."
                    description2="🪄 Just enter a prompt based on the topic or type of word you're interested in, and see the magic appear."
                    srcSet={"https://www.vocala.app/assets/videos/generator.mp4"}
                    srcSet2={"https://www.vocala.app/assets/videos/generator.mp4"}
                />
                <Card
                    title="AI ASSISTANT"
                    subtitle="Diving into your word"
                    description="Our goal of providing effective and enjoyable learning experiences to people around the world is made possible by advanced AI technology. With Vocala Assistant, you can take advantage of engaging AI-generated content to dive into vocabulary and enhance your knowledge."
                    description2="✨ By tapping a prompt, you can access fun and effective explanations to better understand the power of words."
                    srcSet={"https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Flearn.png&w=1080&q=75"}
                    srcSet2={"https://www.vocala.app/_next/image?url=%2Fassets%2Fimages%2Flearn.png&w=1080&q=75"}
                />
                <Question />
            </div>
            <Banner />
            <Footer />
        </>
    );
};

export default Hero;