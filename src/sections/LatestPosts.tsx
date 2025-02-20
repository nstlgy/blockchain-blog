import type { CollectionEntry } from "astro:content";
import Card from "../components/Card";
import { getPostColorFromCategory } from "../utils/postUtils";
import Tag from "../components/Tag";
import CutCornerButton from "../components/CutCornerButton";

function LatestPosts(props: { latestPosts: CollectionEntry<"blog">[] }) {
  const { latestPosts } = props;
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center">
          Your portal to everything blockchain.
        </h2>
        <p className="text-xl text-center text-zinc-400 mt-8">
          Keep up with the newest trends, updates, and insights in the
          blockchain world, updated, weekly.
        </p>
        <div className="mt-16 flex flex-col gap-8">
          {latestPosts.map(
            ({ data: { title, description, category } }, postIndex) => (
              <Card
                key={postIndex}
                buttonText="Read More"
                color={getPostColorFromCategory(category)}
              >
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-3">
                  {title}
                </h3>
                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ),
          )}
        </div>
        <div className="flex justify-center mt-48">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
