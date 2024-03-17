import Link from 'next/link';
import { ListItemCard } from './list-item-card';
import clsx from 'clsx';
import { list } from 'firebase/storage';

export interface ListItem {
  imageUrl: string;
  numberInList: number;
  location: string;
  name: string;
}

export interface HorizontalItemListProps {
  title: string;
  viewMoreUrl?: string;
  items: ListItem[];
}

export function HorizontalItemList({
  title,
  viewMoreUrl,
  items
}: HorizontalItemListProps) {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h2 className="mt-7 mb-5 text-white text-4xl">{title}</h2>
        {viewMoreUrl && (
          <ViewMoreButton url={viewMoreUrl} className="hidden md:block" />
        )}
      </div>
      <div className="flex m-auto gap-4 overflow-auto">
        {items.map((item, index) => (
          <ListItemCard
            className={clsx(
              'flex-none',
              index === 0 && 'ml-auto',
              index === list.length && 'mr-auto'
            )}
            imageUrl={item.imageUrl}
            location={item.location}
            name={item.name}
            numberInList={item.numberInList}
          />
        ))}
      </div>
      {viewMoreUrl && (
        <ViewMoreButton url={viewMoreUrl} className="md:hidden" />
      )}
    </section>
  );
}

function ViewMoreButton({
  url,
  className
}: {
  url: string;
  className?: string;
}) {
  return (
    <Link
      href={url}
      className={clsx(className, 'btn btn-outline my-5 text-white')}
    >
      View More
    </Link>
  );
}
