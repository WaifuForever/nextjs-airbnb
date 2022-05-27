import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const FourOhFour: NextPage = () => {
    return (
        <div className="h-screen my-12 mx-auto px-6">
            <div className="relative table-cell md:min-w-[42%] align-middle px-3">
                <h1 className="text-[145px] font-bold hidden md:inline">
                    Oops!
                </h1>
                <h2 className="text-[32px]">
                    We can't seen to find the page you're looking for.
                </h2>
                <h6 className='text-gray-600'>Error code: 404</h6>
                <ul>
                    <li>Here are some helpful links instead:</li>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Search</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Help</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Traveling on Airbnb</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Hosting on Airbnb</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Trust & Safety</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="relative table-cell align-middle px-3">
                <Image
                    className="hidden md:inline"
                    src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
                    height="428"
                    width="313"
                />
            </div>
        </div>
    );
};

export default FourOhFour;
