import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>IT.GG</h1>
      <h2>구인구직 사이트마다 기본 이력서 양식에 맞도록 변형해주는 서비스</h2>

      <Link href="/resume">
        move to resume page
      </Link>
    </div>
  );
}
