import {
  apiFetchNews,
  apiFetchProducts,
  apiFetchProjects,
} from "../../../../lib/api-request";
import MenuAdmin from "../../../../components/MenuAdmin";

export default async function AdminPostPage({
  params,
}: {
  params: { id: string };
}) {
  let data: any[] = [];
  const id = Number(params?.id || 1);
  switch (id) {
    case 1:
      data = await apiFetchProjects();
      break;
    case 2:
      data = await apiFetchProducts();
      break;
    case 3:
      data = await apiFetchNews();
      break;
    default:
      data = await apiFetchNews();
      break;
  }

  return <MenuAdmin id={id} data={data} />;
}
