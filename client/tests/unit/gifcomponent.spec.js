import { mount } from "@vue/test-utils";
import GifComponent from "@/components/GifComponent";
import { fetchFunc } from "@/clients/client.js";
import flushPromises from "flush-promises";

require("jest-fetch-mock").enableMocks();
jest.mock("@/clients/client.js");

describe("GifComponent tests", () => {
  let wrapper;
  beforeEach(() => {
    fetch.resetMocks();
    wrapper = mount(GifComponent);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  fetchFunc.mockReturnValue([
    {
      type: "gif",
      id: "wAl8p7ISBbYMrzh4sa",
      url:
        "https://giphy.com/gifs/netflix-fate-the-winx-saga-netflix-wAl8p7ISBbYMrzh4sa",
    },
    {
      type: "gif",
      id: "puOukoEvH4uAw",
      url: "https://giphy.com/gifs/showtime-hbo-prime-puOukoEvH4uAw",
    },
    {
      type: "gif",
      id: "26u4kr1xrcbYHs13O",
      url: "https://giphy.com/gifs/bravotv-26u4kr1xrcbYHs13O",
    },
    {
      type: "gif",
      id: "L45Gh1pJaUbBvTpcyJ",
      url: "https://giphy.com/gifs/oh-my-god-L45Gh1pJaUbBvTpcyJ",
    },
    {
      type: "gif",
      id: "YP2HqPBbtQVSU2DFKt",
      url: "https://giphy.com/gifs/memecandy-YP2HqPBbtQVSU2DFKt",
    },
  ]);

  test("When it gets created, then fetch should have been called once", async () => {
    expect(fetchFunc.mock.calls.length).toEqual(1);
  });

  test("When it renders images, then it should have 5 img tags in DOM", async () => {
    await flushPromises();
    const images = wrapper.findAll("img");
    expect(images.length).toBe(5);
  });

  test("When I click on a gif, Then I should land on the giphy page of that gif", async () => {
    await flushPromises();
    delete global.window.location;
    global.window.location = {
      href: "localhost:8080",
    };
    const imgdivs = wrapper.findAll(".imgdiv");
    let i;
    for (i = 0; i < imgdivs.length; i++) {
      imgdivs.at(i).trigger("click");
      expect(window.location.href).toMatch(/giphy.com\/gifs/);
    }
  });
});
