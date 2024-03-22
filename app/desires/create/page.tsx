import Input from '@/components/shared/input';
import { createItem } from '@/services/list-service';

export default function CreateDesire() {
  return (
    <main className="card p-3">
      <header className="card-title dark:text-white text-2xl">
        Add Desire
      </header>
      <section>
        <form action={createItem} className="card-body">
          <Input label="Name" name={'name'} required />

          <Input type="date" name={'plannedDate'} label="Planned Date" />

          <div className="card-actions">
            <input type="submit" className="btn btn-primary" value='Add' />
          </div>
        </form>
      </section>
    </main>
  );
}
