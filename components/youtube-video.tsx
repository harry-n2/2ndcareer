'use client';

import { motion } from 'framer-motion';
import { Container } from './ui/container';

export default function YouTubeVideo() {
    return (
        <section className="bg-primary py-16 lg:py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="aspect-video overflow-hidden bg-slate-900 shadow-2xl">
                        <iframe
                            src="https://www.youtube.com/embed/iDWCvAqLw8s"
                            title="ATHLETE NEXT 紹介動画"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                        />
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
