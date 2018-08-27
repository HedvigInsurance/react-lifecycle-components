import * as React from "react";
import { mount } from "enzyme";
import { Update } from "./update";

interface UpdateTestWatched {
    test: string;
    anotherValue: number;
    somethingElse?: number;
}

test("should call `was` function when `watched` has changed", () => {
  const mockWas = jest.fn<Function>(jest.fn());

  const wrapper = mount(
    <Update<UpdateTestWatched> watched={{ test: "123", anotherValue: 333 }} was={mockWas}>
      <div />
    </Update>
  );

  wrapper.setProps({ watched: { test: "123", anotherValue: 334 } });
  expect(mockWas).toHaveBeenCalled();
});

test("should call `was` function when `watched` has changed for non objects", () => {
    const mockWas = jest.fn<Function>(jest.fn());
  
    const wrapper = mount(
      <Update<string> watched="123" was={mockWas}>
        <div />
      </Update>
    );
  
    wrapper.setProps({ watched: "124" });
    expect(mockWas).toHaveBeenCalled();
  });

test("should not call `was` function when `watched` hasn't changed", () => {
    const mockWas = jest.fn<Function>(jest.fn());

    const wrapper = mount(
        <Update<UpdateTestWatched> watched={{ test: "123", anotherValue: 123 }} was={mockWas}>
            <div />
        </Update>
    );

    wrapper.setProps({ watched: { test: "123", anotherValue: 123 } });
    expect(mockWas).toHaveBeenCalledTimes(0);
});

test("should get correct `watched` value on change", () => {
    const was = (prevWatched: UpdateTestWatched, nextWatched: UpdateTestWatched) => {
        expect(prevWatched.anotherValue).toBe(123)
        expect(nextWatched.test).toBe("1234")
    }

    const wrapper = mount(
        <Update<UpdateTestWatched> watched={{ test: "123", anotherValue: 123 }} was={was}>
            <div />
        </Update>
    );

    wrapper.setProps({ watched: { test: "1234", anotherValue: 12345, somethingElse: 123456 } });
})

