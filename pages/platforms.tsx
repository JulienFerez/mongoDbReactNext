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

  const games = await mongodb.db().collection("games").find().toArray();

  const platforms = games.map((game) => {
    return game.platform;
  });

  return {
    props: {
      platforms: platforms,
    },
  };
};
export default function Platforms({ platforms }) {
  return (
    <div>
      <div>
        {platforms.map((platform) => {
          return (
            <Link href="#">
              <h1>{platform.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
