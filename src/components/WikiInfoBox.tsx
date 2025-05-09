
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface WikiInfoBoxProps {
  title: string;
  children: ReactNode;
}

const WikiInfoBox = ({ title, children }: WikiInfoBoxProps) => {
  return (
    <div className="float-right ml-6 mb-4 w-64 bg-wiki-lightgray border border-gray-300 rounded-sm">
      <div className="bg-wiki-lightblue p-2 font-medium text-center">
        {title}
      </div>
      <Separator />
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};

export default WikiInfoBox;
