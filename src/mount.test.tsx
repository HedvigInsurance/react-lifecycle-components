import * as React from "react";
import { mount } from "enzyme";
import { Mount } from "./mount";

test("should call on function when mounted", () => {
  const mockOn = jest.fn<Function>(jest.fn());

  mount(
    <Mount on={mockOn}>
      <div />
    </Mount>
  );

  expect(mockOn).toHaveBeenCalled();
});
