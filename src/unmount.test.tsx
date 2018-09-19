import * as React from "react";
import { mount } from "enzyme";
import { Unmount } from "./unmount";

test("should call on function when unmounted", () => {
  const mockOn = jest.fn<Function>(jest.fn());

  const wrapper = mount(
    <Unmount on={mockOn}>
      <div />
    </Unmount>
  );

  expect(mockOn).not.toHaveBeenCalled();

  wrapper.unmount();

  expect(mockOn).toHaveBeenCalled();
});
