import { Row, Col, Button } from "react-bootstrap";
import GridItem from "components/grid-item";
import { getPaginetedPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import { useSWRInfinite } from "swr";
import PreviewAlert from "components/preview-alert";

const PAGE_LIMIT = 3;

export default function Home({ posts, preview }) {
  //  const { data, isLoading, error } = usePosts(posts);
  const { data, size, setSize, isValidating } = useSWRInfinite(
    (index) => `api/posts?page=${index}&limit=${PAGE_LIMIT}`,
    { initialData: [posts] }
  );

  return (
    <Layout>
      <Row>
        {preview && <PreviewAlert />}
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <Row className="mb-5">
        {data.map((page) =>
          page.map((post) => (
            <Col md={12 / PAGE_LIMIT}>
              <GridItem post={post} />
            </Col>
          ))
        )}
      </Row>

      <div style={{ textAlign: "center" }}>
        {data[data.length - 1].length !== 0 &&
          (isValidating ? (
            <div style={{ fontSize: 14 }}>Түр хүлээнэ үү...</div>
          ) : (
            <Button onClick={() => setSize(size + 1)}>Цааш нь ...</Button>
          ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const posts = await getPaginetedPosts(0, PAGE_LIMIT);
  console.log("index.html dahin build hiigdlee");
  return {
    props: {
      posts,
      preview,
    },
    revalidate: 10,
  };
};
