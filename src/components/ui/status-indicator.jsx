// components/ui/status-indicator.jsx
import { cn } from "@/lib/utils";

export function StatusIndicator({ status, className }) {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'published':
        return 'bg-green-500';
      case 'draft':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          getStatusColor(status),
          className
        )}
      />
      <span className="text-sm font-medium">{status}</span>
    </div>
  );
}