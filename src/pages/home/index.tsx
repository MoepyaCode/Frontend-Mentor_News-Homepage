import { Container, Main, Wrapper } from "@app-components";
import Navigation from "./navigation";
import Trending from "./trending";
import Introduction from "./introduction";
import NewsFeed from "./news-feed";

export default function Home() {
  return (
    <Main className="bg-white-almost px-4 py-7 flex flex-col items-center gap-[32px]">
      <Navigation />

      <Container className="max-w-[1110px] flex flex-col gap-[64px] xl:gap-[71px]">
        <Wrapper className="flex flex-col xl:flex-row gap-[64px] xl:gap-[30px]">
          <Introduction />
          <NewsFeed />
        </Wrapper>

        <Trending />
      </Container>
    </Main>
  )
}