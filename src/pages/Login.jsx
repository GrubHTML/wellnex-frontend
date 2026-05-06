// import { useState } from "react";
// import { Link } from "react-router";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f0f7ff] px-4">
//       {/* Card */}
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Top accent bar */}
//         <div className="h-1.5 w-full bg-[#0088FF]" />

//         <div className="p-8">
//           {/* Header */}
//           <div className="mb-8 text-center">
//             <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
//             <p className="text-sm text-gray-400 mt-1">
//               Login to your WellneX account
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1.5">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none
//                   focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20 transition-all"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <div className="flex justify-between items-center mb-1.5">
//                 <label className="block text-sm font-medium text-gray-600">
//                   Password
//                 </label>
//                 <a href="#" className="text-xs text-[#0088FF] hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none
//                     focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20 transition-all pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0088FF] transition-colors text-xs"
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               className="w-full py-2.5 bg-[#0088FF] text-white text-sm font-semibold rounded-lg
//                 hover:bg-[#006ecc] active:scale-[0.98] transition-all duration-200 mt-2"
//             >
//               Login
//             </button>
//           </div>

//           {/* Footer */}
//           <p className="text-center text-sm text-gray-400 mt-6">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-[#0088FF] font-medium hover:underline"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

const Login = () => {
  return <div className="mt-20">Login</div>;
};

export default Login;
