The Transition function allows CSS transitions to be applied to components when mounted and unmounted. The function takes a boolean isMounted, and passes that along to the component. It also takes a delayTime in milliseconds which delays the unmounting of the component.

To include the function in your code, follow the following steps:

1. Import the Transition component into your App.js file.
```javascript
import Transition from './Components/Transition';
```

2. Create a constant which uses the component you want to include the transition.
```javascript
const SideBarTransition = Transition(SideBar)
```

3. Include in your App class with the props isMounted and delayTime in milliseconds.
```javascript
<SideBarTransition delayTime{300} isMounted{this.state.sideBarOpen} />
```

In the component you want to add the transition, make sure you receive the props in the constructor.
```javascript
class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
```

By doing this, you recieve the state of "show" which you can use to edit the class of your elements.
```javascript
<nav className={this.props.show ? "side-bar open" : "side-bar"}>
.
.
.
</nav>
```
```css
.side-bar {
  opacity: 0;
  transition: opacity: 0.3s;
}

.side-bar.open {
  opacity: 1;
  transition: opacity: 0.3s
}
```
