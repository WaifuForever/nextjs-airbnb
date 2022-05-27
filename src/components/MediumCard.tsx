import { NextPage } from 'next';
import Image from 'next/image';

type Props = {
    title: string;
    img: string;
};
const MediumCard: NextPage<Props> = ({ img, title }) => {
    return (
        <div className="rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image className="rounded-xl" src={img} layout="fill" />
            </div>

            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    );
};

export default MediumCard;
