import TaskDashboard from "@/components/TaskDashboard";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <TaskDashboard />  {/* ✅ Task Dashboard added here */}
    </main>
  );
}
