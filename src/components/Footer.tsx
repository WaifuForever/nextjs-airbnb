import { NextPage } from 'next';

const Footer: NextPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs mx-1 text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs mx-1 text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Acessibility</p>
                <p>This is a just a sample</p>
                <p>It's an awesome clone</p>
                <p>Please check my github</p>
                <p>Double-Yoo</p>
            </div>
            <div className="space-y-4 text-xs mx-1 text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Why Host?</p>
                <p>Tutorials</p>
                <p>Investors</p>
                <p>Books</p>
                <p>Join Now</p>
            </div>
            <div className="space-y-4 text-xs mx-1 text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Stoicism</p>
                <p>Guidelines</p>
                <p>For The Grind</p>
            </div>
        </div>
    );
};

export default Footer;
