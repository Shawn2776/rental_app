import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const SkeletonCard = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-6 flex-grow" />
      </CardHeader>
      <CardContent>
        <Skeleton className="flex-grow h-4 mt-4" />
        <Skeleton className="flex-grow h-4 mt-4" />
        {/* <Skeleton className="w-1/2 h-4 mt-4" /> */}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Skeleton className="h-10 w-28" />
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
