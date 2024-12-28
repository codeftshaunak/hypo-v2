import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface MasonryLayoutProps<T> {
  items: T[];
  columns?: number;
  renderElement: (item: T) => ReactNode;
  className?: string;
}

const MasonryLayout = <T,>(props: MasonryLayoutProps<T>) => {
  const { items, columns = 3, renderElement, className } = props;
  // Create empty arrays for each column
  const columnItems: T[][] = Array.from({ length: columns }, () => []);

  // Distribute items into columns
  items.forEach((item, index) => {
    columnItems[index % columns].push(item);
  });

  return (
    <div className={cn(`grid`, className)}>
      {columnItems.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-[inherit]">
          {column.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              {renderElement(item)}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
