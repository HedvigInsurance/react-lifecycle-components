React lifecycle as components

## Install

```
    yarn install react-lifecycle-components
```

## Components

### Mount

When you want to perform a side-effect on mount, like sending a tracking event 🚀, starting an animation ✨, or something like that.

```javascript
<Mount on={() => console.log("I was mounted!")} />
```

### Unmount

Basically the same as `Mount` but calls `on` when the component will unmount 😄

```javascript
<Unmount on={() => console.log("I will be unmounted!")} />
```

### Update

When you want to be notified when a prop was changed. 👌🏻 Works with both non-objects (simple equality check) or with objects (shallow equality check).

```javascript
    <Update<string> was={(prevWatched, currentWatched) => console.log("I was updated!")} watched="hello" />

    interface AnObject {
        anObject: string;
    }

    <Update<AnObject> was={(prevWatched, currentWatched) => console.log("I was updated!")} watched={{ anObject: "hello" }} />
```
