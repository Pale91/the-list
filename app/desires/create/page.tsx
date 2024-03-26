'use client';

import { useFormUpdater } from '@/common/hooks/use-form-updater';
import Input from '@/components/shared/input';
import { ListItemCard } from '@/components/shared/list-item-card';
import { Textarea } from '@/components/shared/textarea';
import { createActivity } from '@/services/activity-service';
import { useMemo, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export const dynamic = 'force-dynamic';

export default function CreateDesire() {
  const [errors, dispatch] = useFormState(createActivity, undefined);
  const { formState, onChange } = useFormUpdater();
  const imageRef = useRef<HTMLInputElement>(null);

  // TODO: Free memory URL.revokeObjectURL(output.src);
  // TODO: adjust to contain image with aspect ratio diff than 1:1
  const loadedImage = useMemo(() => {
    if (imageRef.current?.files?.[0] === undefined) {
      return '/default-1x1.jpg';
    }

    return URL.createObjectURL(imageRef.current?.files?.[0]);
  }, [formState['file']]);

  return (
    <main className="p-3">
      <header className="dark:text-white text-2xl">Add Desire</header>
      <section className="">
        <form
          action={dispatch}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onChange={onChange}
        >
          <div className="lg:grid lg:grid-cols-2 gap-2">
            <Input
              label="Name *"
              name={'name'}
              required
              error={errors?.name?._errors[0]}
              containerClassName="max-w-xs lg:max-w-full col-span-2"
            />

            <Input
              label="Location Name"
              name="location"
              placeholder="e.g. Maldives"
              error={errors?.location?._errors[0]}
            />

            <Input
              label="Location Link"
              name="locationLink"
              placeholder="e.g. https://maps.google.com/..."
              error={errors?.locationLink?._errors[0]}
            />

            <Input
              label="Picture *"
              name="file"
              type="file"
              className="file-input file-input-bordered w-full"
              containerClassName="max-w-xs lg:max-w-full col-span-2"
              required
              ref={imageRef}
            />

            <Textarea
              label="Description"
              name="description"
              containerClassName="max-w-xs lg:max-w-full col-span-2"
              error={errors?.description?._errors[0]}
            />

            <input
              type="submit"
              className="btn btn-primary col-span-2"
              value="Add"
            />
          </div>
          <div className="hidden md:flex flex-col items-center">
            <h1>Preview</h1>
            <ListItemCard
              imageUrl={loadedImage}
              location={formState['location'] ?? ''}
              name={formState['name'] ?? ''}
              numberInList={21}
            />
          </div>
        </form>
      </section>
    </main>
  );
}
