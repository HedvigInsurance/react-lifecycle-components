React lifecycle as components

## Install
```
    yarn install react-lifecycle-components
```

## Components

### Mount
Takes one prop on which is called when the component mounts.

```javascript
    <Mount on={() => console.log("I was mounted!")} />
```

#### Usecase
When you want to perform a side-effect on mount, like sending a tracking event, starting an animation, or something like that.