import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <main>
      <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-8">
        {"abc".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
