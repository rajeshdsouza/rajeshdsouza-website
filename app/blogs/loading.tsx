import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <Skeleton className="h-16 w-64 mb-12" />
      
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="work-card p-6 rounded-lg">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-48 mb-4" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}