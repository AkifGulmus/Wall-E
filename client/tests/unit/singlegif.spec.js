import { shallowMount } from "@vue/test-utils";
import singleGifComp from "@/components/singleGifComp";

require("jest-fetch-mock").enableMocks();
jest.mock("@/clients/client.js");

const gifProp = {
  gif: {
    type: "gif",
    id: "wAl8p7ISBbYMrzh4sa",
    url:
      "https://giphy.com/gifs/netflix-fate-the-winx-saga-netflix-wAl8p7ISBbYMrzh4sa",
  },
};
describe("Single Gif Comp Tests", () => {
  let wrapper;
  beforeEach(() => {
    fetch.resetMocks();
    wrapper = shallowMount(singleGifComp, {
      propsData: gifProp,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test("when a gif is clicked, it emits as expected", async () => {
    const imgdivs = wrapper.findAll(".imgdiv");
    imgdivs.at(0).trigger("click");
    expect(wrapper.emitted().clickedEvent[0][0]).toBe(gifProp.gif);
  });
});
