import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="m-4">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>

          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>

          <Button size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;
