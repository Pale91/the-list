import Image from 'next/image';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface ListItemCardProps {
  imageUrl: string;
  numberInList: number;
  location: string;
  name: string;
}

export function ListItemCard({
  imageUrl,
  location,
  name,
  numberInList
}: ListItemCardProps) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="relative w-80 h-80">
        <Image
          src={imageUrl}
          alt={`#${numberInList} ${name}`}
          fill
          className="object-fill"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          #{numberInList} {name}
        </h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-start flex items-center">
          <MapPinIcon className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
