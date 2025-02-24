import { poppins } from "@/utils/typography.utils";
import { BookOpen } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={`${poppins.className} antialiased bg-gray-50`}>
     <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Mi Aprendizaje</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Usuario"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    {children}
    </body>;
}
