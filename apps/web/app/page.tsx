import db from "@repo/db/client";

export default async function Home() {
  const users = await db.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
}
