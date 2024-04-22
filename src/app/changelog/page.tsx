// app/changelog/page.tsx

type ChangeLog = {
  id: string;
  date: string;
  title: string;
  post: string;
};

export default async function ChangelogPage() {
  const changeLogs = await fetch(
    `https://projectplannerai.com/api/changelog?projectId=j57crafbck4rdrfsp64ydym2tx6j2b83`
  ).then((res) => res.json() as Promise<ChangeLog[]>);

  return (
    <div>
      <h1>Changelog</h1>
      <ul>
        {changeLogs.map((log) => (
          <li key={log.id}>
            <h2>{log.title}</h2>
            <p>{log.post}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
