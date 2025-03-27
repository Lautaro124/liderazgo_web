// import { ICourse } from "@/interface/course.interface";
// import { Clock, PlayCircle } from "lucide-react";

// export const HistoryCard = ({
//   image,
//   title,
//   lastLesson,
//   totalLessons,
//   completedLessons,
//   progress,
// }: ICourse) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-full">
//       <div className="md:w-2/5 relative">
//         <img
//           className="h-48 md:h-full w-full object-cover"
//           src={image}
//           alt={title}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:bg-gradient-to-r" />
//       </div>
//       <div className="md:w-3/5 p-6 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center text-sm text-purple-600 mb-2">
//             <Clock className="h-4 w-4 mr-1" />
//             <span>Última clase: {lastLesson?.duration}</span>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
//           <p className="text-sm text-gray-600 mb-4">{lastLesson?.module}</p>
//           <div className="space-y-3">
//             <div className="flex justify-between text-sm text-gray-500">
//               <span>
//                 {completedLessons} de {totalLessons} clases
//               </span>
//               <span>{progress}%</span>
//             </div>
//             <div className="bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-purple-600 h-2 rounded-full transition-all duration-300"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-sm text-gray-500 truncate flex-1">
//             Siguiente: {lastLesson?.title}
//           </span>
//           <button className="ml-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
//             <PlayCircle className="h-5 w-5 mr-2" />
//             Continuar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
