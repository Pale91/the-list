'use client';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import Input from '@/components/shared/input';
import { Textarea } from '@/components/shared/textarea';
import { isUserAdmin } from '@/infrastructure/roles';
import { createActivity } from '@/services/activity-service';
import { getServerSession } from 'next-auth';
import { useFormState, useFormStatus } from 'react-dom';

export const dynamic = 'force-dynamic';

export default function CreateDesire() {
  const [errors, dispatch] = useFormState(createActivity, undefined);
  console.log('errors', errors);

  return (
    <main className="p-3">
      <header className="dark:text-white text-2xl">Add Desire</header>
      <section className="">
        <form
          action={dispatch}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="lg:grid lg:grid-cols-2 gap-2">
            <Input label="Name *" name={'name'} required />

            <Input
              label="Location Name"
              name="location"
              placeholder="e.g. Maldives"
            />

            <Input
              label="Location Link"
              name="locationLink"
              containerClassName="max-w-xs lg:max-w-full col-span-2"
              placeholder="e.g. https://maps.google.com/..."
            />

            <Textarea
              label="Description"
              name="description"
              containerClassName="max-w-xs lg:max-w-full col-span-2"
            />

            <input
              type="submit"
              className="btn btn-primary col-span-2"
              value="Add"
            />
          </div>
          <div className="hidden md:block">
            <h1>Preview</h1>
          </div>
        </form>
      </section>
    </main>
  );
}
