import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/platforms">
        <a>Platforms</a>
      </Link>
      <Link href="/games">
        <a>Games</a>
      </Link>
    </>
  );
}
