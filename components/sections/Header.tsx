import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white pt-5 pb-2 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text">
              CreatorSpace.AI
            </span>
          </Link>
          {/* Add navigation links or other header content here if needed */}
        </div>
      </div>
    </header>
  );
} 