import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
// import { useRouter } from "next/router"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const router = useRouter()
  return (
      <main style={{ background: "#fff", height: "100vh" }}>
        <h1>Home Page</h1>
        <p>
          <Link href="/users">Users</Link>
        </p>
      </main>
  );
}
