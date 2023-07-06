import SideBar from './components/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full justify-between scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <SideBar />
      {children}
    </main>
  );
}
