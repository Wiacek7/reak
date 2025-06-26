import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Movie data (should match the main page)
const movies = [
  {
    slug: "anikulapo",
    title: "Anikulapo",
    desc: "A mystical drama about Saro, a man who gains the power to conquer death.",
    img: "https://m.media-amazon.com/images/M/MV5BMjA2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt21432050/"
  },
  {
    slug: "citation",
    title: "Citation",
    desc: "A student battles a university's system after a sexual assault accusation.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt11481312/"
  },
  {
    slug: "mokalik",
    title: "Mokalik",
    desc: "A day in the life of an 11-year-old sent to work at a mechanic workshop.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt10327136/"
  },
  {
    slug: "swallow",
    title: "Swallow",
    desc: "A woman faces tough choices in 1980s Lagos.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt14391622/"
  },
  {
    slug: "tenant-of-the-house",
    title: "Tenant of the House",
    desc: "A political drama about a young legislator's journey.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt16287560/"
  },
  {
    slug: "the-bridge",
    title: "The Bridge",
    desc: "A love story between two people from different backgrounds.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt8193396/"
  },
  {
    slug: "omugwo",
    title: "Omugwo",
    desc: "A comedy about new parents and their mothers-in-law.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt15150392/"
  },
  {
    slug: "diamonds-in-the-sky",
    title: "Diamonds in the Sky",
    desc: "Three families are united by cancer.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt14605694/"
  },
  {
    slug: "hanatu",
    title: "Hanatu",
    desc: "A short film about hope and healing.",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/title/tt8493700/"
  },
  {
    slug: "djalifa",
    title: "Djalifa",
    desc: "A story of love and tradition. (No description found)",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.google.com/search?q=djalifa+movie"
  },
  {
    slug: "out-in-the-darkness",
    title: "Out in the Darkness",
    desc: "A gripping Nigerian drama. (No description found)",
    img: "https://m.media-amazon.com/images/M/MV5BZTg2YjYwYjUtYjQwZi00YjQwLTg2YjMtYjQwYjQwYjQwYjQwXkEyXkFqcGdeQXVyMTUzOTczNzYz._V1_FMjpg_UX1000_.jpg",
    link: "https://www.google.com/search?q=out+in+the+darkness+naija+movie"
  },
];

export default function MovieDetail({ params }: { params: { slug: string } }) {
  const movie = movies.find((m) => m.slug === params.slug);
  if (!movie) return notFound();
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-8 flex flex-col items-center">
        <Image src={movie.img} alt={movie.title} width={400} height={600} className="rounded-2xl mb-8 object-cover" />
        <h1 className="text-4xl font-bold mb-4 text-cyan-400 text-center">{movie.title}</h1>
        <p className="text-lg text-slate-300 mb-8 text-center">{movie.desc}</p>
        <Link href={movie.link} target="_blank" rel="noopener noreferrer">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300">View on IMDb</button>
        </Link>
      </div>
    </div>
  );
}
