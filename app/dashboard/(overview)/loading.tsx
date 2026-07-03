import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading1() {
  return (
    <>
      <DashboardSkeleton />
      {/*
            This hidden string forces Safari & Firefox to cross their
            buffering threshold right away, preventing the stream parser panic.
          */}
      <span className="sr-only hidden">{"_".repeat(1024)}</span>
    </>
  );
}
