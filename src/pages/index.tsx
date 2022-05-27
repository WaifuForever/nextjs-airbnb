import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

type Props = {
    exploreData: {
        location: string;
        distance: string;
        img: string;
    }[];
    cardsData: {
        location: string;
        title: string;
        img: string;
    }[];
};

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {
    return (
        <div className="">
            <Head>
                <title>Jojo's airbnb</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData?.map((item, i) => (
                            <SmallCard
                                key={item.img + i}
                                img={item.img}
                                distance={item.distance}
                                location={item.location}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>
                    <div className="flex space-x-3 p-3 -ml-3 overflow-x-scroll scrollbar-hide">
                        {cardsData?.map((item, i) => (
                            <MediumCard
                                key={item.img + i}
                                img={item.img}
                                title={item.title}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then(
        (res) => res.json()
    );
    const cardsData = await fetch('https://links.papareact.com/zp1').then(
        (res) => res.json()
    );
    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}

export default Home;
