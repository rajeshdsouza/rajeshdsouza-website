import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <Skeleton className="h-16 w-3/4 md:w-1/2 mb-6" />
      <Skeleton className="h-12 w-2/3 md:w-1/3 mb-8" />
      <Skeleton className="h-24 w-full md:w-3/4 mb-8" />
      
      <div className="flex flex-wrap gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-12 w-32" />
        ))}
      </div>
    </div>
  );
}