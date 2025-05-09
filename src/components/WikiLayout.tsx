
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Flask } from "lucide-react";

interface WikiLayoutProps {
  children: ReactNode;
}

const WikiLayout = ({ children }: WikiLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-wiki-lightblue border-b border-gray-300 py-2">
        <div className="wiki-container flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center">
            <Flask className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-semibold">
              <Link to="/" className="hover:underline">
                Химиялық Байланыстар
              </Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <input 
              type="search" 
              placeholder="Іздеу..." 
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
      </header>

      <div className="wiki-container px-4 md:px-6 py-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="wiki-sidebar">
            <h2 className="font-medium mb-3 text-lg">Мазмұны</h2>
            <Separator className="mb-3" />
            <nav>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Негізгі бет
                  </Link>
                </li>
                <li>
                  <Link to="/covalent" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Ковалентті байланыс
                  </Link>
                </li>
                <li>
                  <Link to="/ionic" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Иондық байланыс
                  </Link>
                </li>
                <li>
                  <Link to="/metallic" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Металдық байланыс
                  </Link>
                </li>
                <li>
                  <Link to="/hydrogen" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Сутектік байланыс
                  </Link>
                </li>
                <li>
                  <Link to="/examples" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Мысалдар және қолданыстар
                  </Link>
                </li>
                <li>
                  <Link to="/glossary" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                    Терминдер глоссарийі
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="wiki-sidebar mt-4">
            <h2 className="font-medium mb-3">Құралдар</h2>
            <Separator className="mb-3" />
            <ul className="space-y-1">
              <li>
                <a href="#" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                  Басып шығару
                </a>
              </li>
              <li>
                <a href="#" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                  PDF жүктеу
                </a>
              </li>
              <li>
                <a href="#" className="wiki-link block py-1 hover:bg-gray-200 px-2 rounded">
                  Басқа тілдерде
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <article className="wiki-article">
            {children}
          </article>

          <footer className="mt-6 text-sm text-gray-500 border-t border-gray-300 pt-4">
            <p>© 2025 Химиялық Байланыстар Энциклопедиясы. Барлық құқықтар қорғалған.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default WikiLayout;
