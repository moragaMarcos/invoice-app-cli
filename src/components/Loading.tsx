import { FaSpinner } from "react-icons/fa";

interface Props {
  loadingMessage: string;
}

export default function LoadingMessage({ loadingMessage }: Props) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <div className="flex flex-col items-center gap-4 text-blue-600 animate-fade-in">
        <FaSpinner className="animate-spin text-4xl" />
        <p className="text-lg font-semibold text-gray-700">{loadingMessage}</p>
      </div>
    </div>
  );
}
