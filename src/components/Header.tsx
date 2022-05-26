import { NextPage } from 'next';
import Image from 'next/image';

type Props = {};

const Header: NextPage<Props> = () => {
    return (
        <header>
            <div className="relative flex items-center h-10">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
        </header>
    );
};

export default Header;
