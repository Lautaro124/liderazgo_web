import { ICourse } from "@/interface/course.interface";
import { Lock } from "lucide-react";

const Card = ({ previewImage, title, shortDescription, isPurchased }: ICourse) => {
  console.log("🚀 ~ Card ~ image:", previewImage)
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img className="h-48 w-full object-cover" src={previewImage} alt={title} />
        {!isPurchased && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Lock className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{shortDescription}</p>
        <div className="mt-4">
          {/* {isPurchased ? (
            <div>
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>
                  {completedLessons} de {totalLessons} clases
                </span>
                <span>{progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <button className="w-full flex items-center justify-center px-4 py-2 border border-purple-600 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Ver curso
            </button>
          )} */}
          <button className="w-full flex items-center justify-center px-4 py-2 border border-purple-600 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            ver curso
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
