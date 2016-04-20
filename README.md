
<p align="center">
  <img src="https://raw.githubusercontent.com/MaxMEllon/demos/master/simplayer/simplayer.png">
</p>


- - -

<!--
<p>
  <a href="https://www.npmjs.com/package/simplayer">
    <img src="https://nodei.co/npm/simplayer.png"/>
  </a>
  <a href="https://www.npmjs.com/package/simplayer">
    <img src="https://img.shields.io/npm/v/simplayer.svg" style="float:right;"/>
  </a>
  <a href="https://github.com/MaxMEllon/simplayer/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/npm/l/simplayer.svg" style="float:right"/>
  </a>
</p>
-->

## About

This is simple multi platform sound player.
I get ideas from [opener](https://www.npmjs.com/package/opener).

This module should be used when to play simple sound or sound effect.
Not suitable for music players.

## Installation

```sh
npm install simplayer-promise --save
```

If platform is linux, then need to install the `alsa`

```sh
# before we start the work, please update
sudo apt-get update
sudo apt-get upgrade

# install ALSA
sudo apt-get install alsa-base alsa-utils
```

## Usage

simplayer-promise function return Promise instance.

```js

var play = require('simplayer-promise');

play('/path/to/sound.mp3')
  .then(() => {
    // something
  })
  .catch(() => {
    // reject
  });

```

## Author

- Maxmellon

## LICENSE

MIT
