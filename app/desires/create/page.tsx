import Input from '@/components/shared/input';
import { createItem } from '@/services/list-service';

export default function CreateDesire() {
  return (
    <main className="p-3">
      <header className="dark:text-white text-2xl">Add Desire</header>
      <section className="">
        <form
          action={createItem}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="lg:grid lg:grid-cols-2 gap-2">
            <Input label="Name" name={'name'} required />

            <Input label="Description" name={'description'} />

            <Input type="date" name={'plannedDate'} label="Planned Date" />

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
