export default function Footer() {
  return (
    <footer
      className="
        py-10
        border-t
        border-zinc-800
        bg-black
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
              text-violet-500
            "
          >
            YIDSAM
          </h3>

          <p className="text-gray-400">
            Graphic Designer • Video Editor •
            Content Creator • Voice Over Artist
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a
            href="#"
            className="hover:text-violet-500 transition"
          >
            YouTube
          </a>

          <a
            href="#"
            className="hover:text-violet-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="hover:text-violet-500 transition"
          >
            Instagram
          </a>
        </div>
      </div>

      <p
        className="
          text-center
          text-gray-500
          mt-8
          text-sm
        "
      >
        © {new Date().getFullYear()} YIDSAM.
        All rights reserved.
      </p>
    </footer>
  );
}