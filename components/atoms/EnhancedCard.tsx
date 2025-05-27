import React, { useEffect, useState } from 'react';
import { TaskDividerAgent } from '@/lib/TaskDividerAgent';
import { cn } from "@/lib/utils";
import { TaskDivision } from '@/types/TaskTypes';

interface EnhancedCardProps extends React.ComponentProps<"div"> {
  title?: string;
  cardContent?: React.ReactNode;
  actions?: React.ReactNode;
  customStyles?: React.CSSProperties;
  taskId?: string;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  className,
  title,
  cardContent,
  actions,
  customStyles,
  taskId,
  ...props
}) => {
  const [taskDivisions, setTaskDivisions] = useState<TaskDivision[]>([]);
  const taskDivider = new TaskDividerAgent();

  useEffect(() => {
    if (taskId) {
      taskDivider.initializeTask(taskId);
      setTaskDivisions(taskDivider.getDivisions(taskId));
    }
  }, [taskId]);

  return (
    <div
      data-slot="enhanced-card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm",
        className
      )}
      style={customStyles}
      {...props}
    >
      {title && (
        <div data-slot="card-header" className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          {actions && <div data-slot="card-actions">{actions}</div>}
        </div>
      )}
      {cardContent && (
        <div data-slot="card-content">
          {cardContent}
        </div>
      )}
      {taskId && taskDivisions.length > 0 && (
        <div data-slot="task-divider">
          <h4 className="text-md font-medium mb-2">Task Divisions</h4>
          <ul className="list-disc pl-5">
            {taskDivisions.map((division) => (
              <li key={division.id}>{division.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EnhancedCard;