
interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <nav className="wiki-sidebar mb-6">
      <h2 className="font-medium mb-2">Мақала мазмұны</h2>
      <ol className="list-decimal list-inside">
        {items.map((item) => (
          <li 
            key={item.id}
            className={`py-1 ${item.level > 1 ? 'ml-' + (item.level * 3) : ''}`}
          >
            <a href={`#${item.id}`} className="wiki-link hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
