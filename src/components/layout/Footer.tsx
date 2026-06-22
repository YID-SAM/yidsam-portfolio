export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-violet-500 mb-4">
          YIDSAM Creative Studio
        </h3>

        <p className="text-gray-400 mb-4">
          Graphic Designer • Video Editor • Content Creator • Voice Over Artist
        </p>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} YIDSAM Creative Studio.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}