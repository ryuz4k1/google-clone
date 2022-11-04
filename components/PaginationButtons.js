import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  console.log(startIndex);

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?${router.query.term}&start=${startIndex - 10}`}>
        <div className="items-center hover:undeline">
            {/* <ChevronLfetIcon /> */}
            <p> Previous </p>
          </div>
        </Link>
      )}
      <Link href={`/search?${router.query.term}&start=${startIndex + 10}`}>
        <div className="items-center hover:undeline">
          {/* <ChevronRightIcon /> */}
          <p> Next </p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
