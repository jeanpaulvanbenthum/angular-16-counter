# AngularJS directive for incrementing a counter form input field

A directive for making a [plus/minus input](http://bootsnipp.com/snippets/featured/buttons-minus-and-plus-in-input) based on the work of [Maikel Daloo](http://maikeldaloo.com/post/angularjs-counter-directive).

## Demo
http://Firestitch.github.io/angular-counter/

## Dependencies
- required:
	Bootstrap for styling

See `bower.json` and `index.html` in the `gh-pages` branch for a full list / more details

## Install
1. download the files
	1. Bower
		1. add `"angular-counter": "latest"` to your `bower.json` file then run `bower install` OR run `bower install angular-counter`
2. include the files in your app
	1. `counter.min.js`
	2. `counter.less` OR `counter.min.css` OR `counter.css`
3. include the module in angular (i.e. in `app.js`) - `Firestitch.angular-counter`

See the `gh-pages` branch, files `bower.json` and `index.html` for a full example.


## Documentation
See the `counter.js` file top comments for usage examples and documentation
https://github.com/Firestitch/angular-counter/blob/master/counter.js

| Attribute              | Default | Description                                                       |
| ---------------------- | ------- | ----------------------------------------------------------------- |
| min/data-min           | null    | A minimum value, never to go below.                               |
| max/data-min           | null    | A maximum value, never to go above.                               |
| step/data-step         | 1       | How much to increment/decrement by.                               |
| addclass/data-addclass | null    | Add a class to the container.                                     |
| width/data-width       | null    | Set the width of the input field.                                 |
| editable/data-editable | false   | Whether the field is readyonly or not. By default, it's readonly. |

```html
&lt;div fs-counter value="someValue"
    data-min="0"
    data-max="100"
    data-step="1"
    data-addclass="someClass"
    data-width="130px"
    data-editable
    &gt;&lt;/div&gt;
```

## Development

1. `git checkout gh-pages`
	1. run `npm install && bower install`
	2. write your code then run `grunt`
	3. git commit your changes
2. copy over core files (.js and .css/.less for directives) to master branch
	1. `git checkout master`
	2. `git checkout gh-pages counter.js counter.min.js counter.less counter.css counter.min.css`
3. update README, CHANGELOG, bower.json, and do any other final polishing to prepare for publishing
	1. git commit changes
	2. git tag with the version number, i.e. `git tag v1.0.0`
4. create github repo and push
	1. [if remote does not already exist or is incorrect] `git remote add origin [github url]`
	2. `git push origin master --tags` (want to push master branch first so it is the default on github)
	3. `git checkout gh-pages`
	4. `git push origin gh-pages`
5. (optional) register bower component
	1. `bower register angular-counter [git repo url]`
