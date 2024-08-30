import { TicTacToe } from "@/components/TicTacToe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-800 min-h-screen">
      <h1 className="text-center text-4xl pt-2 text-gray-500">Tic Tac Toe</h1>
      <TicTacToe />
    </main>
  );
}
