'use server';

export async function createItem(formData: FormData) {
  const params = {
    name: formData.get('name'),
    plannedDate: formData.get('plannedDate')
  };
  console.log(params);
}
