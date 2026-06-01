import Header from '@/components/header';
import Hero from '@/components/hero';
import YouTubeVideo from '@/components/youtube-video';
import Mission from '@/components/mission';
import Problem from '@/components/problem';
import Solution from '@/components/solution';
import Benefits from '@/components/benefits';
import Curriculum from '@/components/curriculum';
import Profile from '@/components/profile';
import Results from '@/components/results';
import Testimonials from '@/components/testimonials';
import Plan from '@/components/plan';
import Guarantee from '@/components/guarantee';
import Faq from '@/components/faq';
import FinalCta from '@/components/final-cta';
import LineSection from '@/components/line-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Header />
      <Hero />
      <YouTubeVideo />
      <Mission />
      <Problem />
      <Solution />
      <Benefits />
      <Curriculum />
      <Profile />
      <Results />
      <Testimonials />
      <Plan />
      <Guarantee />
      <Faq />
      <FinalCta />
      <LineSection />
      <Footer />
    </main>
  );
}
