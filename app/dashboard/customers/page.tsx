import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
      <Table customers={customers}></Table>
    </Suspense>
  );
}
