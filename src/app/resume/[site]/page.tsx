import { sites } from "@/fixtures/sites";

export async function generateStaticParams() {
  const params = [...sites].map((site) => {
    return { 'site': site.href };
  });

  return params;
}

export default function SiteResumePage({ params }: { params: { site: string } }) {
  return (
    <div>
      {params.site}
    </div>
  );
}