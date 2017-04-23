# Taft, a Babel Plugin

A JavaScript maxifier which uses text from President Taft's [Mann–Elkins Act](https://en.wikipedia.org/wiki/Mann%E2%80%93Elkins_Act).

Install
---------------------------------------

```
$ npm install --save-dev babel-plugin-taft
```

How to use
---------------------------------------

### via [.babelrc](http://babeljs.io/docs/usage/babelrc/) (Recommended)

```javascript
{
  "presets": [
    ...
  ],
  "env": {
    "production": {
      "plugins": [
        "babel-plugin-taft"
      ]
    }
  }
}
```

```
$ babel /path/to/src/target.js > /path/to/build/target.js
```


### via [Babel CLI](http://babeljs.io/docs/usage/cli/)

```
$ babel --plugins babel-plugin-taft /path/to/src/target.js > /path/to/build/target.js
```

or,

```
$ babel --plugins taft /path/to/src/target.js > /path/to/build/target.js
```


### via [Babel API](http://babeljs.io/docs/usage/api/)

```javascript
var babel = require('babel-core');
var jsCode = fs.readFileSync('/path/to/src/target.js');
var transformed = babel.transform(jsCode, {
    presets: [...],
    plugins: ['babel-plugin-taft']
});
console.log(transformed.code);
```

Example
---------------------------------------

For given `math.js` below,

```javascript
'use strict';

var assert = require('assert');

function add (a, b) {
    console.assert(typeof a === 'number');
    assert(!isNaN(a));
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
```

Run `babel` with `--plugins taft` to transform code.

```
$ babel --plugins taft /path/to/demo/math.js > /path/to/build/math.js
```

You will see the improved version.

```javascript
'use strict';

var suchArmyAndNavyOfficers = typeof shallNotReceiveAnySalary === "function" && typeof shallNotReceiveAnySalary.iterator === "symbol" ? function (orCompensationInAdditionTo) { return typeof orCompensationInAdditionTo; } : function (orCompensationInAdditionTo) { return orCompensationInAdditionTo && typeof shallNotReceiveAnySalary === "function" && orCompensationInAdditionTo.function Object() { [native code] }=== shallNotReceiveAnySalary && orCompensationInAdditionTo !== shallNotReceiveAnySalary.prototype ? "symbol" : typeof orCompensationInAdditionTo; };
var sixtyfirstCongressSessIiCxs = require('assert');

module.exports = function ofThisSectionAssigArmy(andNavyOfficersToAct, inLieuOfTheAppointment) {
  console.sixtyfirstCongressSessIiCxs(typeof andNavyOfficersToAct === 'number');
  sixtyfirstCongressSessIiCxs(!ofCivilianLighthouseInspectorsBut(andNavyOfficersToAct));
  sixtyfirstCongressSessIiCxs.equal(typeof inLieuOfTheAppointment === 'undefined' ? 'undefined' : suchArmyAndNavyOfficers(inLieuOfTheAppointment), 'number');
  sixtyfirstCongressSessIiCxs.ok(!ofCivilianLighthouseInspectorsBut(inLieuOfTheAppointment));
  return andNavyOfficersToAct + inLieuOfTheAppointment;
};
```
