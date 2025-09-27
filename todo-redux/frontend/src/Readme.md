"First, I created the Home.jsx page as the main container where I managed all states like todos, editId, and editText. I also wrote functions for fetching, adding, updating, toggling, and deleting todos, and used useEffect to fetch data when the component loads.

Then, I created three components: TodoInput, TodoList, and TodoItem.

TodoInput handles adding and updating todos.

TodoList loops through all todos and renders them.

TodoItem displays a single todo with options to mark complete, edit, or delete.

I separated my API calls in an api.js file using Axios so that my code is clean and reusable. The data flow is unidirectional: Home passes states and functions to children via props, and children call back those functions to update state in the parent.


setup search and filter
--------------------------
"I set up search and filter using React state. I store the search text and filter status in state, and before rendering, I run Array.filter() on my todos. In that filter, I check if the todo text includes the search input, and if it matches the selected filter (all, completed, or pending). The result is passed to my TodoList component."