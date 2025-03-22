"use client";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { useState } from "react";
import { IModules } from "@/interface/module.interface";

interface ModuleAccordionProps {
  modules: IModules[];
}

export function ModuleAccordion({ modules }: ModuleAccordionProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="flex flex-col gap-4">
      {modules.map((module) => (
        <div key={module.id} className="border-b border-gray-200 bg-white rounded-lg shadow-lg">
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between w-full gap-3 items-center" >
                <h2 className="text-lg font-medium text-gray-900">
                  {module.name}
                </h2>
              <span className="ml-2 text-sm text-gray-500">
                ({module.classes.length} {module.classes.length > 1 ? "clases" : "clase"})
              </span>
              </div>
                <p className="text-sm text-gray-500 text-left">{module.description}</p>
            </div>
            {expandedModule === module.id ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {expandedModule === module.id && (
            <div className="px-6 pb-4">
              <div className="space-y-3">
                {module.classes.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Play className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {classItem.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {classItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
