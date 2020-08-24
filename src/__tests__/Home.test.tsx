import React from "react";
import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";

import api from "../service/api";

import App from "../App";

const apiMock = new MockAdapter(api);

const wait = (amount = 0) => {
  return new Promise(resolve => setTimeout(resolve, amount));
};
const actWait = async (amount = 0) => {
  await act(async () => {
    await wait(amount);
  });
};

describe("Home page", () => {
  it("should render with data", async () => {
    render(<App />);

    apiMock.onGet("categories").reply(200, ["animal"]);
    apiMock.onGet("random").reply(200, {
      categories: [""],
      created_at: "2020-01-05 13:42:25.352697",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "lDKxCa2kShO3wkHtbnwFvg",
      updated_at: "2020-01-05 13:42:25.352697",
      url: "https://api.chucknorris.io/jokes/lDKxCa2kShO3wkHtbnwFvg",
      value:
        'UFC actually stands for "Ultimate Fatality by Chuck". To prove this, Chuck Norris challenged the UFC champion. When Chuck entered the cage, the UFC champ pummeled himself to death.',
    });

    await actWait();

    expect(screen.getByTestId("items")).toContainElement(
      screen.getByText(/animal/i)
    );

    expect(
      screen.getByText(
        'UFC actually stands for "Ultimate Fatality by Chuck". To prove this, Chuck Norris challenged the UFC champion. When Chuck entered the cage, the UFC champ pummeled himself to death.'
      )
    ).toBeInTheDocument();
  });

  it("should fetch random joke by category", async () => {
    render(<App />);
    apiMock.resetHandlers();

    apiMock.onGet("categories").reply(200, []);

    apiMock.onGet(/random\??[a-z0-9=]*/i).reply(200, {
      categories: ["animal"],
      created_at: "2020-01-05 13:42:19.576875",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "bmom6jqftpqgokh8adtolw",
      updated_at: "2020-01-05 13:42:19.576875",
      url: "https://api.chucknorris.io/jokes/bmom6jqftpqgokh8adtolw",
      value:
        "Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.",
    });

    await actWait();

    const button = screen.getByRole("button", {
      name: /carregar outro/i,
    });
    userEvent.click(button);

    await actWait(350);

    const p = screen.getByText(
      "Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower."
    );
    expect(p).toBeInTheDocument();
  });
});
