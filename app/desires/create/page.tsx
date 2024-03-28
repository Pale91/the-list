'use client';

import { useFormUpdater } from '@/common/hooks/use-form-updater';
import Input from '@/components/shared/input';
import { ListItemCard } from '@/components/shared/list-item-card';
import { Textarea } from '@/components/shared/textarea';
import { createActivity } from '@/services/activity-service';
import { useEffect, useMemo, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export const dynamic = 'force-dynamic';
const defaultImage = '/default-1x1.jpg';

// TODO: PREVENT XSS
export default function CreateDesire() {
  const [errors, dispatch] = useFormState(createActivity, undefined);
  const { formState, onChange } = useFormUpdater();
  const imageRef = useRef<HTMLInputElement>(null);

  const file: File | undefined = imageRef.current?.files?.[0];
  const loadedImage = useMemo(() => {
    if (file === undefined) {
      return defaultImage;
    }

    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    if (imageRef.current === undefined || imageRef.current === null) {
      return;
    }

    imageRef.current.onload = () => {
      if (
        imageRef.current?.src !== undefined &&
        imageRef.current?.src !== defaultImage
      ) {
        URL.revokeObjectURL(imageRef.current?.src);
      }
    };
  }, [imageRef.current]);

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
              label="Picture"
              name="picture"
              type="file"
              className="file-input file-input-bordered w-full"
              containerClassName="max-w-xs lg:max-w-full col-span-2"
              accept="image/*"
              ref={imageRef}
              error={errors?.picture?._errors[0]}
            />

            <Textarea
              label="Description"
              name="description"
              containerClassName="max-w-xs lg:max-w-full col-span-2"
              error={errors?.description?._errors[0]}
            />

            <SubmitButton />
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

function SubmitButton() {
  const status = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary col-span-2">
      {status.pending && <span className="loading loading-spinner"></span>}
      Add
    </button>
  );
}
