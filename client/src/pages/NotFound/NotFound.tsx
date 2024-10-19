import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1>404</h1>
      <div class='notFound'>
      <iframe src="https://giphy.com/embed/5E7vDOIamcWlzg97TG" width="480" height="480" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wirdesign-dog-hotdog-nyan-5E7vDOIamcWlzg97TG"></a></p>
      </div>
    </Layout>
  );
}

export default NotFound;
