'use client';

import SlideWrapper from '@/components/SlideWrapper/SlideWrapper';

import Home from '@/app/components/sections/home/Home';
import Formats from '@/app/components/sections/formats/Formats';
import PersonalPerformance from '@/app/components/sections/personal-performance/PersonalPerformance';
import SmallFormat from '@/app/components/sections/small-format/SmallFormat';
import About from '@/app/components/sections/about/About';
import YourEvent from '@/app/components/sections/your-event/YourEvent';
import CinemaFormat from '@/app/components/sections/cinema-format/CinemaFormat';
import Resume from '@/app/components/sections/resume/Resume';
import Contacts from '@/app/components/sections/contacts/Contacts';
import VideoGalleryPage from "@/app/components/sections/video-gallery/VideoGalleryPage";

export default function Page() {
    return (
        <>
            <main>
                <section id="home"><SlideWrapper><Home/></SlideWrapper></section>
                <section id="formats"><SlideWrapper><Formats/></SlideWrapper></section>
                <section id="personal-performance"><SlideWrapper><PersonalPerformance/></SlideWrapper></section>
                <section id="small-format"><SlideWrapper><SmallFormat/></SlideWrapper></section>
                <section id="about"><SlideWrapper><About/></SlideWrapper></section>
                <section id="your-event"><SlideWrapper><YourEvent/></SlideWrapper></section>
                <section id="cinema-format"><SlideWrapper><CinemaFormat/></SlideWrapper></section>
                <section id="resume"><SlideWrapper><Resume/></SlideWrapper></section>
                <section id="video"><SlideWrapper><VideoGalleryPage/></SlideWrapper></section>
                <section id="contacts"><SlideWrapper><Contacts/></SlideWrapper></section>
            </main>
        </>
    );
}
