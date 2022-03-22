import { GetServerSideProps } from "next";
import { getDatabase } from "../src/database";
import Link from "next/link";

// import "dotenv/config";
// export default function Page({ games }) {
//   return <>{games}</>;
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();
  console.log(mongodb);

  const data = await mongodb.db().collection("games").find().toArray();

  const games = data.map((game) => {
    return game.name;
  });

  console.log(games);

  return {
    props: {
      games: games,
    },
  };
};
export default function Games({ games }) {
  return (
    <div>
      <div>
        {games.map((game) => {
          return (
            <Link href="#">
              <h1>{game}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
