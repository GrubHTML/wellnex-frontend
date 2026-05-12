import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden relative">
      {/* Big background 404 */}
      <span
        className="absolute text-[20rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "#0088FF", opacity: 0.08 }}
      >
        404
      </span>

      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full -translate-y-1/2 translate-x-1/2"
        style={{ background: "#0088FF", opacity: 0.06 }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-1/2 -translate-x-1/2"
        style={{ background: "#0088FF", opacity: 0.06 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-md">
        {/* Pill badge */}
        <div className="inline-block mb-6">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
            style={{
              color: "#0088FF",
              borderColor: "#0088FF",
              background: "#f0f7ff",
            }}
          >
            Page Not Found
          </span>
        </div>

        {/* 404 number */}
        <h1
          className="text-8xl font-black mb-2 leading-none"
          style={{ color: "#0088FF" }}
        >
          404
        </h1>

        {/* Divider line */}
        <div
          className="w-12 h-1 rounded-full mx-auto mb-6"
          style={{ background: "#0088FF" }}
        />

        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ background: "#0088FF" }}
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2.5 text-sm font-semibold rounded-lg border-2 transition-all duration-200 hover:text-white active:scale-[0.97]"
            style={{
              color: "#0088FF",
              borderColor: "#0088FF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0088FF";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#0088FF";
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
