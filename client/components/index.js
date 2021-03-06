/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './Main.jsx';
export {default as UserHome} from './UserHome.jsx';
export {Login, Signup} from './AuthForm.jsx';
export {default as Board} from './Board.jsx';
